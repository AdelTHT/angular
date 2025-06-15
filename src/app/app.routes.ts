import { Routes } from '@angular/router';
import { redirectIfAuthenticated } from './guards/auth-redirect.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  {
    path: 'cars',
    loadComponent: () => import('./cars/cars.component').then(m => m.CarsComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent),
    canActivate: [redirectIfAuthenticated] // 👈 ici
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register.component').then(m => m.RegisterComponent),
    canActivate: [redirectIfAuthenticated] // 👈 ici aussi
  }
];

