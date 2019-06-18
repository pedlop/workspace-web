import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'plop-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterpriseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
