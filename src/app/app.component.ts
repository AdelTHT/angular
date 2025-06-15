import { Component, effect } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { fetchAuthSession, signOut } from 'aws-amplify/auth';
import { CommonModule } from '@angular/common';
import { AuthStateService } from './services/auth-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CommonModule],
})
export class AppComponent {
  title = 'CARS';

  constructor(public authState: AuthStateService, private router: Router) {
    effect(() => {
      this.checkSession();
    });
  }
  sessionChecked = false;

  async checkSession() {
    try {
      const session = await fetchAuthSession();
      const isConnected = session.userSub !== undefined;
      this.authState.setSignedIn(isConnected);
    } catch {
      this.authState.setSignedIn(false);
    } finally {
      this.sessionChecked = true;
    }
  }

  async logout() {
    await signOut();
    this.authState.setSignedIn(false);
    this.router.navigate(['/login']);
  }
}
