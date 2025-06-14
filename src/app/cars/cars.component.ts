import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  imports: [CommonModule,FormsModule],
})
export class CarsComponent {
  cars: any[] = [];
  newCar = {
    brand: '',
    model: '',
    year: null,
    pricePerDay: null,
  };

  addCar() {
    if (this.newCar.brand && this.newCar.model && this.newCar.year && this.newCar.pricePerDay) {
      this.cars.push({ ...this.newCar });
      this.newCar = { brand: '', model: '', year: null, pricePerDay: null }; // Réinitialise le formulaire
    } else {
      console.error('All fields are required');
    }
  }
}