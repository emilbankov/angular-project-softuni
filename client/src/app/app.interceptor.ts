import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AppInterceptor implements HttpInterceptor {
  baseUrl = 'http://localhost:3030/users';
  constructor(private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);

    // if (req.url.startsWith('/data')) {
    //     req = req.clone({
    //         url: req.url.replace('/data', baseUrl),
    //         withCredentials: true,
    //     });
    // }

    if (req.url.startsWith('/users')) {
      req = req.clone({
        url: req.url.replace('/users', this.baseUrl),
        withCredentials: true,
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/auth/login']);
        } else {
          // this.errorService.setError(err);
          this.router.navigate(['/error']);
        }

        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS
}