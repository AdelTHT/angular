import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { fetchAuthSession } from 'aws-amplify/auth';

export const redirectIfAuthenticated: CanActivateFn = async () => {
  const router = inject(Router);
  try {
    const session = await fetchAuthSession();
    const isSignedIn = session.userSub !== undefined;
    if (isSignedIn) {
      // Redirige l’utilisateur connecté vers /cars
      return router.createUrlTree(['/cars']);
    }
  } catch {
    // utilisateur non connecté → accès autorisé
  }
  return true;
};
