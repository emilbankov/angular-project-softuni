import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserAuth } from 'src/app/types/user';
import { get, post } from '../utils/request';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserAuth | undefined;
  userSubscription: Subscription;

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  constructor() {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user
    })
  }

  login(email: string, password: string) {
    return post('http://localhost:3030/users/login', { email, password }).then((user) => {
      this.user$$.next(user as UserAuth);
      return user;
    })
  }

  register(email: string, password: string) {
    return post('http://localhost:3030/users/register', { email, password }).then((user) => {
      this.user$$.next(user as UserAuth);
      return user;
    })
  }

  logout() {
    return get('http://localhost:3030/users/logout').then(() => {
      this.user$$.next(undefined);
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
