import { Component, OnInit } from '@angular/core';
import {ChallengeRepositoryService} from './services/challenge-repository.service';

@Component({
  selector: 'piano-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  majorChords: string[];
  chordVoicings: string[];
  currentChord: string;

  constructor(private challengeRepository: ChallengeRepositoryService) { }

  ngOnInit() {
    this.majorChords = this.challengeRepository.getMajorChords();
    this.chordVoicings = this.challengeRepository.getChordVoicings();
  }

}
