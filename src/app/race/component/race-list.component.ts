import { Component, OnInit } from '@angular/core';
import {Race} from '../model/race';
import {RaceService} from '../service/race.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {
  pageTitle: string;
  races: Race[];
  filteredRaces: Race[];
  private _listFilter: string;
  errorMessage = '';

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this._listFilter = '';
    this.pageTitle = 'Race list';
    this.raceService.get().subscribe(
      value => {
        this.races = value;
        this.filteredRaces = value;
        },
        error => this.errorMessage = error
    );
  }

  performFilter(searchString: string): Race[] {
    const searchStringLowerCase = searchString.toLowerCase();
    return this.races.filter(value => value.name.toLowerCase().includes(searchStringLowerCase));
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRaces = this._listFilter ? this.performFilter(value) : this.races;
  }

}
