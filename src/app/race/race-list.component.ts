import { Component, OnInit } from '@angular/core';
import {Race} from './race';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {
  pageTitle: string;
  races: Race[];
  filteredRaces: Race[];
  listFilter: string;

  constructor() { }

  ngOnInit() {
    this.listFilter = 'date';
    this.pageTitle = 'Race list';
  }

}
