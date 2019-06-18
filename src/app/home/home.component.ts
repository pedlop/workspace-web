import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../core/api/api.service';
import { Professional } from '../core/api/api.model';

@Component({
  selector: 'plop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  professionals$: Observable<Professional[]>;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.professionals$ = this.apiService.fetchProfessionals();
  }

}
