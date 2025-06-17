import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signIn, signOut } from 'aws-amplify/auth';
import { Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service'; // adapte le chemin si besoin

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 300px; margin: auto;">
      <h2>Connexion</h2>
      <form (ngSubmit)="handleSignIn()">
        <input type="text" [(ngModel)]="username" name="username" placeholder="Email" required class="form-control" /><br />
        <input type="password" [(ngModel)]="password" name="password" placeholder="Mot de passe" required class="form-control" /><br />
        <button type="submit">Se connecter</button>
      </form>
      <p *ngIf="errorMessage" style="color:red">{{ errorMessage }}</p>
      <p>
        Pas encore de compte ?
        <a routerLink="/register"><strong>Créer un compte</strong></a>
      </p>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private authState: AuthStateService 
  ) {}

  async handleSignIn() {
    try {
      await signOut(); 
      const user = await signIn({
        username: this.username,
        password: this.password,
      });

      console.log('Connecté avec succès :', user);
      this.errorMessage = '';
      this.authState.setSignedIn(true); 
      this.router.navigate(['/cars']);
    } catch (error: any) {
      console.error('Erreur de connexion :', error);
      this.errorMessage = error.message || 'Erreur';
    }
  }
}
