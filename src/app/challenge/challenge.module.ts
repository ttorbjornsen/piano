import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChallengeRoutingModule} from './challenge-routing.module';
import {ChallengeComponent} from './challenge.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule, MatIconModule} from '@angular/material';
import {CardComponent} from './card/card.component';
import {OsmdRendererModule} from 'osmd-angular';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {SheetComponent} from './sheet/sheet.component';

@NgModule({
  declarations: [ChallengeComponent, CardComponent, SheetComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    OsmdRendererModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ChallengeModule { }
