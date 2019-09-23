import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChallengeRoutingModule} from './challenge-routing.module';
import {ChallengeComponent} from './challenge.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule, MatIconModule, MatInputModule, MatRadioModule} from '@angular/material';
import {CardComponent} from './card/card.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {SheetComponent} from './sheet/sheet.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ChordProgressionComponent } from './chord-progression/chord-progression.component';

@NgModule({
  declarations: [ChallengeComponent, CardComponent, SheetComponent, KeyboardComponent, ChordProgressionComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
    MatRadioModule
  ]
})
export class ChallengeModule { }
