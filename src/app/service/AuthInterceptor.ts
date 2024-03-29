import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { LoginService } from './LoginService';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private LoginService: LoginService) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      //add the jwt token (localStorage) request
      let authReq = req;
      const token = this.LoginService.getToken();
      // console.log('inside interceptor');
  
      if (token != null) {
        authReq = authReq.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
      }
      return next.handle(authReq);
    }
  }
  
  export const authInterceptorProviders = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ];
  