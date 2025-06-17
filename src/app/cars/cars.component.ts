import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource'; 
import { uploadData, getUrl } from 'aws-amplify/storage';

const client = generateClient<Schema>();

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: (Schema['Car']['type'] & { imageUrl?: string })[] = [];
  loading = false;
  error = '';
  dateInputs: { [carId: string]: { startDate?: string, endDate?: string } } = {};

  async ngOnInit() {
    this.loading = true;
    try {
      const { data: items } = await client.models.Car.list();
      this.cars = items;

      for (const car of this.cars) {
        if (!this.dateInputs[car.id]) {
          this.dateInputs[car.id] = { startDate: '', endDate: '' };
        }
        // Charge l'URL de l'image si imageKey existe
        if (car.imageKey) {
          car.imageUrl = await this.getCarImageUrl(car.imageKey);
        }
      }
    } catch (err: any) {
      this.error = 'Erreur lors du chargement des voitures';
      console.error(err);
    }
    this.loading = false;
  }

  async reserveCar(car: Schema['Car']['type'], start: string, end: string) {
  try {
    const result = await client.models.Car.update({
      id: car.id,
      isRented: true,
      reservationStart: start,
      reservationEnd: end
    });
    console.log('Update result:', result);
    // Recharge la liste pour refléter l'état à jour
    await this.ngOnInit();
  } catch (err) {
    console.error('Erreur lors de la réservation', err);
    alert('Erreur lors de la réservation');
  }
}

  async uploadCarImage(carId: string, file: File) {
    const path = `car-images/${carId}/${file.name}`;
    await uploadData({ path, data: file });
    await client.models.Car.update({
      id: carId,
      imageKey: path
    });
  
    const car = this.cars.find(c => c.id === carId);
    if (car) {
      car.imageKey = path;
      car.imageUrl = await this.getCarImageUrl(path);
    }
  }

  async getCarImageUrl(imageKey: string): Promise<string> {
    const { url } = await getUrl({ path: imageKey });
    return url.toString();
  }
  onFileSelected(event: Event, car: Schema['Car']['type']) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.uploadCarImage(car.id, file);
  }
}
}