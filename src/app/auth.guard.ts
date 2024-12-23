import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const allowedRoles = next.data['roles'] as string[];
    if (this.authService.isAuthorized(allowedRoles)) {
      return true;
    }

    // Redirect to the login page or some other route
    this.router.navigate(['/login']);
    return false;
  }
}
