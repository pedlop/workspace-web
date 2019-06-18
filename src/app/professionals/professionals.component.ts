import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { Professional } from '../core/api/api.model';
import { collapse } from '../_animations/collapse';

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

  private activeProfessionalEvent: BehaviorSubject<Professional>;

  constructor() {
    this.activeProfessionalEvent = new BehaviorSubject(null);
    this.activeProfessional$ = this.activeProfessionalEvent.asObservable();
  }

  ngOnInit(): void {
    this.activeProfessionalEvent.next(this.professionals[0]);
  }

  onClickSelectProfessional(event: Event, professional: Professional): boolean {
    event.stopPropagation();
    console.log(event, professional);
    this.activeProfessionalEvent.next(professional);
    // if (professional.id === this.activeProfessionalEvent.getValue().id) {
    //   professional.active = true;
    // }
    console.log(this.professionals);
    return false;
  }

}
