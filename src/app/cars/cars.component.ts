import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- AJOUTE CETTE LIGNE
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource'; // adapte le chemin si besoin

const client = generateClient<Schema>();

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule], // <-- AJOUTE CommonModule ICI
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Schema['Car']['type'][] = [];
  loading = false;
  error = '';

  async ngOnInit() {
    this.loading = true;
    try {
      const { data: items } = await client.models.Car.list();
      this.cars = items;
    } catch (err: any) {
      this.error = 'Erreur lors du chargement des voitures';
    }
    this.loading = false;
  }

  async reserveCar(car: Schema['Car']['type']) {
    try {
      await client.models.Car.update({
        id: car.id,
        isRented: true
      });
      car.isRented = true;
    } catch (err) {
      alert('Erreur lors de la réservation');
    }
  }
}