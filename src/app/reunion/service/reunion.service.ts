import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Reunion} from '../model/reunion';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  // Change to the url when api is deployed
  private url = '/api/reunions.json';
  constructor(private http: HttpClient) { }

  getReunions(): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.url)
      .pipe(
        tap(value => console.log(JSON.stringify(value)),
          e => console.error(e))
      );
  }

  getReunionById(id: number): Observable<Reunion | undefined> {
    return this.getReunions()
      .pipe(
        map((reunions: Reunion[]) => reunions.find(reunion => reunion.id === id))
      );
  }
}
