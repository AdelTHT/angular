import { Component, OnInit } from '@angular/core';
import Amplify from 'aws-amplify'; // Importez Amplify explicitement

@Component({
  selector: 'app-cars',
  templateUrl: './cars/cars.component.html',
  styleUrls: ['./cars/cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: any[] = [];

  async ngOnInit() {
    try {
      const carsData: any = await Amplify.API.graphql({
        query: `
          query ListCars {
            listCars {
              items {
                id
                brand
                model
                year
                pricePerDay
              }
            }
          }
        `,
      });
      this.cars = carsData.data.listCars.items;
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  }
}