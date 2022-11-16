import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}
  token:any;
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = this.authService.getToken();
    if (this.token) {
      
      const newRequest = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.token
        }
      })

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}
