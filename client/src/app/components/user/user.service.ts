import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserAuth } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserAuth | undefined;
  userSubscription: Subscription;

  isLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user
    })
  }
 
  login(email: string, password: string) {
    return this.http.post<UserAuth>('http://localhost:3030/users/login', { email, password }).pipe(tap((user) => this.user$$.next(user)));
  }

  register(email: string, password: string) {
    return this.http.post<UserAuth>('http://localhost:3030/users/register', { email, password }).pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http.post<UserAuth>('http://localhost:3030/users/logout', {}).pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
