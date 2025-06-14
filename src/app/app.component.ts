import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsComponent } from './cars/cars.component'; // Importez CarsComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CarsComponent], // Ajoutez CarsComponent ici
})
export class AppComponent {
  title = 'amplify-angular-template';
}