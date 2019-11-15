import {Component, Input, OnInit} from '@angular/core';
import {Race} from '../../model/race';
import {RaceService} from '../../service/race.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {
  pageTitle: string;
  @Input()
  races: Race[];
  filteredRaces: Race[];
  private _listFilter: string;
  errorMessage = '';

  // Pagination
  collectionSize = 0;
  pageSize = 2;
  page = 1;

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this._listFilter = '';
    this.pageTitle = 'Race list';
    this.filteredRaces = this.races;
    this.collectionSize = this.races.length;
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
