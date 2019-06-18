import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Professional } from './api.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  fetchProfessionals(): Observable<Professional[]> {
    return this.http.get<Professional[]>('/assets/database/dados.json');
  }
}
