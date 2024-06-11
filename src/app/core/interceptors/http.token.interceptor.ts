import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

export class HttpTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwtService = inject(JwtService);
    const token = jwtService.getToken();

    if (!token) return next.handle(req);

    const newHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Token ${token}`);

    const updatedRequest = req.clone({ headers: newHeaders });

    return next.handle(updatedRequest);
  }
}
