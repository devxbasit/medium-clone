import { Inject, Injectable, inject, runInInjectionContext } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  userService = inject(UserService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
    return this.userService.isAuthenticated$.pipe(
      take(1),
      map((isAuthenticated) => !isAuthenticated)
    );

    return true;
  }
}
