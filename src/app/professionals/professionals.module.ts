import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

import { ProfessionalsItemComponent } from './professionals-item/professionals-item.component';
import { ProfessionalsComponent } from './professionals.component';
// import { ProfessionalActiveComponent } from './professionals-active/professionals-active.component';

@NgModule({
  declarations: [
    ProfessionalsComponent,
    ProfessionalsItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatBadgeModule
  ],
  exports: [ProfessionalsComponent]
})
export class ProfessionalsModule { }
