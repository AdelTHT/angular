import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  imports: [CommonModule],
})
export class CarsComponent {
  cars: any[] = [];

  addCar() {
    console.log('Add Car button clicked');
    this.cars.push({
      brand: 'New Brand',
      model: 'New Model',
      year: 2025,
      pricePerDay: 100,
    });
  }
}