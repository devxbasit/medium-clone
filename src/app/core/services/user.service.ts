import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, distinctUntilChanged, map } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  public currentUser$: Observable<User> = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  private apiService: ApiService = inject(ApiService);
  private jwtService: JwtService = inject(JwtService);

  populate() {
    const token = this.jwtService.getToken();
    if (token) {
      this.apiService.get('/user').subscribe({
        next: (data) => {
          this.setAuth({ ...data.user, token: token });
        },
        error: () => {
          this.purgeAuth();
        },
      });
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type: string, credentials: any): Observable<User> {
    const route = `${type.toLocaleLowerCase() === 'login' ? '/login' : ''}`;

    return this.apiService.post(`/users${route}`, { user: credentials }).pipe(
      map((data) => {
        this.setAuth(data.user);
        return data.user;
      })
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  updateUser(user: User) {
    return this.apiService.put('/users', { user: user }).pipe(
      map((data) => {
        this.currentUserSubject.next(data.user);
        return data.user;
      })
    );
  }
}
