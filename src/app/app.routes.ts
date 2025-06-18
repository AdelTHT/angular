import { Routes } from '@angular/router';
import { redirectIfAuthenticated } from './guards/auth-redirect.guard';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  {
    path: 'cars',
    loadComponent: () => import('./cars/cars.component').then(m => m.CarsComponent),
    canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent),
    canActivate: [redirectIfAuthenticated]
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register.component').then(m => m.RegisterComponent),
    canActivate: [redirectIfAuthenticated]
  }
];