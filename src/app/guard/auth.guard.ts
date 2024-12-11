import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  let isAuth = false

  authService.isAuth().subscribe({
    next: (res) => {
      isAuth = res
    }
  })

  if(!isAuth) {
    router.navigate(['login'])
  }
  
  return isAuth;
};
