import { Component, OnInit } from '@angular/core';
import {Race} from '../../race/race';
import {Reunion} from '../model/reunion';
import {ReunionService} from '../service/reunion.service';

@Component({
  selector: 'app-reunion-list',
  templateUrl: './reunion-list.component.html',
  styleUrls: ['./reunion-list.component.scss']
})
export class ReunionListComponent implements OnInit {
  pageTitle: string;
  reunions: Reunion[];
  filteredReunions: Reunion[];
  listFilter: string;
  errorMessage = '';

  constructor(private reunionsService: ReunionService) { }

  ngOnInit() {
    this.pageTitle = 'Reunion List';

    this.reunionsService.getReunions().subscribe({
      next: value => {
        this.reunions = value;
        this.filteredReunions = value;
      },
      error: err => this.errorMessage = err
    });
  }

}
