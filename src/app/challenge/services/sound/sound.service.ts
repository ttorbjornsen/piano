import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import {Chord, Play, ScaleChord} from '../../../domain/music-vocabulary';
import {Observable, Observer} from 'rxjs';
import {ChallengeRepositoryService} from '../repository/challenge-repository.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to play notes and chords.
 * May adjust default tone, interval etc.
 */
export class SoundService {
  // todo - https://github.com/deanmalone/PianoPlay/blob/master/src/app/core/sound.service.ts
  // https://www.guitarland.com/MusicTheoryWithToneJS/PlayChords.html
  private synth: Tone.AudioNode = new Tone.PolySynth().toMaster();

  // todo - the sound service should only play? not fetch data?
  constructor(private challengeRepository: ChallengeRepositoryService) {
  }


  playChordProgression(playSequence: Observable<Play[]>) {
    playSequence.subscribe(seq => {
      const notes = seq.map(c => c.pianoNotes);
      notes.forEach(n => {
        const synth = this.synth;
        const sequence = new Tone.Sequence((time, note) => {
          console.log(note);
          synth.triggerAttackRelease(note, '4n', time);
        }, n, '4n');
        sequence.start();
        Tone.Transport.start();
      });
    });

  }






}
