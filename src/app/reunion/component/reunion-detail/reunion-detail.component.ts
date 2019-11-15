import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Reunion} from '../../model/reunion';
import {HttpClient} from '@angular/common/http';
import {ReunionService} from '../../service/reunion.service';

@Component({
  selector: 'app-reunion-detail',
  templateUrl: './reunion-detail.component.html',
  styleUrls: ['./reunion-detail.component.scss']
})
export class ReunionDetailComponent implements OnInit {
  pageTitle = 'Reunion detail'
  reunion: Reunion| undefined;

  // Pagination
  collectionSize = 0;
  pageSize = 2;
  page = 1;

  constructor(private route: ActivatedRoute, private reunionService: ReunionService) { }

  ngOnInit() {
    // Recover the reunion associated to the id in param
    const id = +this.route.snapshot.paramMap.get('id');
    this.getReunion(id);
    console.log('FOUND' + id);
  }

  private getReunion(id: number): void {
    this.reunionService.getReunionById(id).subscribe({
      next: val => this.initFields(val)
    });
  }

  initFields(reunion: Reunion) {
    if (reunion) {
      this.reunion = reunion;
      this.collectionSize = reunion.races ? reunion.races.length : 0;
    }
  }

}
