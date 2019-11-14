import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Reunion} from '../model/reunion';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  // Change to the url when api is deployed
  private url = '/api/data.json';
  constructor(private http: HttpClient) { }

  getReunions(): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.url);
  }
}
