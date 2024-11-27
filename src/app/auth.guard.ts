import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  
  // Check if token exists
  if (!token) {
    // Redirect to login if no token
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};
