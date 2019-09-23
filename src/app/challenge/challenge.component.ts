import {Component, OnInit} from '@angular/core';
import {ChallengeRepositoryService} from './services/repository/challenge-repository.service';
import {Scale} from '../domain/music-vocabulary';
import {Observable, Subject} from 'rxjs';
import * as Tone from 'tone';
import {Frequency, Midi} from 'tone/tone';
import {SoundService} from './services/sound/sound.service';

@Component({
  selector: 'piano-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  private selectedScale: Scale;
  private selectedChordProgression: string[];

  private scales$: Observable<Scale[]> = this.challengeRepository.scales$;

  private scaleSelectedSubject = new Subject<string>();
  private scaleSelectedSubject$ = this.scaleSelectedSubject.asObservable();

  private chordProgressionSelectedSubject = new Subject<string[]>();
  private chordProgressionSelectedSubject$ = this.chordProgressionSelectedSubject.asObservable();

  private chordProgressions$ = this.challengeRepository.getScaleChordProgression(this.scaleSelectedSubject$, this.chordProgressionSelectedSubject$);

  constructor(private challengeRepository: ChallengeRepositoryService) { }

  ngOnInit() {
    const soundService = new SoundService(this.challengeRepository);
    soundService.playChordProgression(this.chordProgressions$);
    // const synth = new Tone.PolySynth().toMaster();
    // synth.triggerAttackRelease(['C4', 'E4', 'G4'], '8n');
  }


  onScaleChange($event: any) {
    this.scaleSelectedSubject.next($event);
  }

  onChordProgressionChange($event: any) {
    this.chordProgressionSelectedSubject.next($event);
  }
}
