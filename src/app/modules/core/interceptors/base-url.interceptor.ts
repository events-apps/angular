import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvironmentService } from '@core/services/environment.service';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor(private readonly environment: EnvironmentService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = this.trimLastSlash(this.environment.apiUrl);
    const resource = this.trimFirstSlash(request.url);
    const url = `${baseUrl}/${resource}`;

    return next.handle(request.clone({ url }));
  }

  private trimFirstSlash(url: string) {
    return url.replace(/^\//, '');
  }

  private trimLastSlash(url: string) {
    return url.replace(/\/$/, '');
  }
}
