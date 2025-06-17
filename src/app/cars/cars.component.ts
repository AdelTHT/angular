import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Ajouté ici
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource'; // adapte le chemin si besoin

const client = generateClient<Schema>();

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- FormsModule ajouté ici
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Schema['Car']['type'][] = [];
  loading = false;
  error = '';
  dateInputs: { [carId: string]: { startDate?: string, endDate?: string } } = {};

  async ngOnInit() {
  this.loading = true;
  try {
    const { data: items } = await client.models.Car.list();
    this.cars = items;
    // Initialisation des dates pour chaque voiture
    for (const car of this.cars) {
      if (!this.dateInputs[car.id]) {
        this.dateInputs[car.id] = { startDate: '', endDate: '' };
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
      await client.models.Car.update({
        id: car.id,
        isRented: true,
        reservationStart: start,
        reservationEnd: end
      });
      car.isRented = true;
      car.reservationStart = start;
      car.reservationEnd = end;
    } catch (err) {
      alert('Erreur lors de la réservation');
    }
  }
}