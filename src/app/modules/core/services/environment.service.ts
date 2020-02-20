import { Injectable } from '@angular/core';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  get apiUrl() {
    return environment.apiUrl;
  }

  get githubUrl() {
    return environment.githubUrl;
  }
}
