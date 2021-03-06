import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { Professional } from '../core/api/api.model';
import { collapse } from '../_animations/collapse';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'plop-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    collapse(300, false)
  ]
})
export class ProfessionalsComponent implements OnInit {

  @Input() professionals: Professional[];

  activeProfessional$: Observable<Professional>;
  activeProfessionalID: number;

  private activeProfessionalEvent: BehaviorSubject<Professional>;

  constructor() {
    this.activeProfessionalEvent = new BehaviorSubject(null);
    this.activeProfessional$ = this.activeProfessionalEvent.asObservable().pipe(
      tap(pro => this.activeProfessionalID = pro.id)
    );
  }

  ngOnInit(): void {
    this.activeProfessionalEvent.next(this.professionals[0]);
  }

  onClickSelectProfessional(event: Event, professional: Professional): boolean {
    event.stopPropagation();
    this.activeProfessionalEvent.next(professional);
    return false;
  }

}
