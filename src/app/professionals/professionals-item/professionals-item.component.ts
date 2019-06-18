import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Professional } from '../../core/api/api.model';

@Component({
  selector: 'plop-professionals-item',
  templateUrl: './professionals-item.component.html',
  styleUrls: ['./professionals-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalsItemComponent implements OnInit {

  @Input() professional: Professional;

  constructor() { }

  ngOnInit(): void { }

}
