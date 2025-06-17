import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signUp, confirmSignUp } from 'aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 300px; margin: auto;">
      <h2>Inscription</h2>
      <form (ngSubmit)="handleRegister()">
        <input type="text" [(ngModel)]="email" name="email" placeholder="Email" required class="form-control" /><br />
        <input type="password" [(ngModel)]="password" name="password" placeholder="Mot de passe" required class="form-control" /><br />
        <button type="submit">S'inscrire</button>
      </form>

      <p *ngIf="message" style="color:green">{{ message }}</p>
      <p *ngIf="errorMessage" style="color:red">{{ errorMessage }}</p>

      <hr />
      <h3>Confirmer votre inscription</h3>
      <form (ngSubmit)="confirm()">
        <input type="text" [(ngModel)]="confirmEmail" name="confirmEmail" placeholder="Email" required /><br />
        <input type="text" [(ngModel)]="code" name="code" placeholder="Code reçu par email" required /><br />
        <button type="submit">Valider le code</button>
      </form>
      <p *ngIf="confirmMessage" style="color:green">{{ confirmMessage }}</p>
      <p *ngIf="confirmError" style="color:red">{{ confirmError }}</p>
    </div>
  `
})
export class RegisterComponent {
  email = '';
  password = '';
  message = '';
  errorMessage = '';

  confirmEmail = '';
  code = '';
  confirmMessage = '';
  confirmError = '';

  constructor(private router: Router) {}

  async handleRegister() {
    try {
      await signUp({
        username: this.email,
        password: this.password,
        options: {
          userAttributes: { email: this.email }
        }
      });
      this.message = 'Inscription réussie. Vérifiez vos mails si la validation est activée.';
      this.errorMessage = '';
    } catch (error: any) {
      this.errorMessage = error.message || 'Erreur inconnue';
      this.message = '';
      console.error(error);
    }
  }

  async confirm() {
    try {
      await confirmSignUp({
        username: this.confirmEmail,
        confirmationCode: this.code,
      });
      this.confirmMessage = 'Inscription confirmée avec succès ! Redirection en cours...';
      this.confirmError = '';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); 
    } catch (error: any) {
      console.error(error);
      this.confirmError = error.message || 'Erreur';
      this.confirmMessage = '';
    }
  }
}
