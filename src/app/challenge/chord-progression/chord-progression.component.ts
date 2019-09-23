import {Component, Input, OnInit} from '@angular/core';
import {ScaleChord} from '../../domain/music-vocabulary';
import {Observable} from 'rxjs';

@Component({
  selector: 'piano-chord-progression',
  templateUrl: './chord-progression.component.html',
  styleUrls: ['./chord-progression.component.scss']
})
export class ChordProgressionComponent implements OnInit {

  @Input()
  chordProgressions$: Observable<ScaleChord[]>;

  constructor() { }

  ngOnInit() {

  }


}
