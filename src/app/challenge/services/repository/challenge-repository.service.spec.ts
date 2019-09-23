import { TestBed } from '@angular/core/testing';

import { ChallengeRepositoryService } from './challenge-repository.service';
import {tap} from 'rxjs/internal/operators/tap';
import {TestScheduler} from 'rxjs/testing';
import {ScaleChord} from '../../../domain/music-vocabulary';
import {of} from 'rxjs/internal/observable/of';

describe('ChallengeRepositoryService', () => {
  let scheduler: TestScheduler;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    const service: ChallengeRepositoryService = TestBed.get(ChallengeRepositoryService);
    expect(service).toBeTruthy();
  });

  it('should return the chord sequence in the order given', () => {
    const service: ChallengeRepositoryService = TestBed.get(ChallengeRepositoryService);

    const scaleChordProgression = service.getScaleChordProgression(of('C'), of(['IV', 'V', 'I']));
    scaleChordProgression.pipe(tap(item => console.log(item))).subscribe();


  });

  it('should return the chord sequence in the order given MARBLE', () => {
    const service: ChallengeRepositoryService = TestBed.get(ChallengeRepositoryService);
    scheduler.run(({expectObservable}) => {
      const expectedMarble = '(abc)';
      const scaleChordC: ScaleChord = {
        chord: 'C',
        scaleDegree: 'I'
      };
      const scaleChordF: ScaleChord = {
        chord: 'F',
        scaleDegree: 'IV'
      };
      const scaleChordG: ScaleChord = {
        chord: 'G',
        scaleDegree: 'V'
      };
      const expectedScaleChords = {a: scaleChordF, b: scaleChordG, c: scaleChordC};
      const scaleChordProgression$ = service.getScaleChordProgression(of('C'), of(['IV', 'V', 'I']));
      expectObservable(scaleChordProgression$).toBe(expectedMarble, expectedScaleChords);

    });

  });

});
