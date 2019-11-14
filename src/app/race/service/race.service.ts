import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Race} from '../model/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  url = 'api/races.json';

  constructor(private http: HttpClient) { }

  get(): Observable<Race[]> {
    return this.http.get<Race[]>(this.url);
  }
}
