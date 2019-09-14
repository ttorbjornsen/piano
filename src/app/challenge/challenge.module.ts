import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import {ChallengeComponent} from './challenge.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [ChallengeComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class ChallengeModule { }
