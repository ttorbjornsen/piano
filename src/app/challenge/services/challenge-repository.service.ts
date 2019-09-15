import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeRepositoryService {

  constructor() { }

  // todo - create as observable
  getMajorChords(): string[] {
    return ['C', 'C#', 'A', 'Bb', 'B'];
  }

  // todo - create as observable
  getChordVoicings(): string[] {
    return ['root', '1st', '2nd'];
  }
}
