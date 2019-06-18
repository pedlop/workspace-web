import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'plop-internal-error',
  templateUrl: './internal-error.component.html',
  styleUrls: ['./internal-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternalErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
