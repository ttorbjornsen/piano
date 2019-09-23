import {Injectable} from '@angular/core';
import {Chord, Play, Scale, ScaleChord} from '../../../domain/music-vocabulary';
import {of} from 'rxjs/internal/observable/of';
import {combineLatest, forkJoin, Observable} from 'rxjs';
import {find, map, mergeAll} from 'rxjs/operators';
import {merge} from 'rxjs/internal/observable/merge';
import {tap} from 'rxjs/internal/operators/tap';
import {combineAll} from 'rxjs/internal/operators/combineAll';

@Injectable({
  providedIn: 'root'
})
export class ChallengeRepositoryService {

  scales$: Observable<Scale[]> = of([
    {
      name: 'C',
      scale: [
        {
          note: 'C',
          scaleDegree: 1
        },
        {
          note: 'D',
          scaleDegree: 2
        },
        {
          note: 'E',
          scaleDegree: 3
        },
        {
          note: 'F',
          scaleDegree: 4
        },
        {
          note: 'G',
          scaleDegree: 5
        },
        {
          note: 'A',
          scaleDegree: 6
        },
        {
          note: 'B',
          scaleDegree: 7
        }
      ],
      chords: [
        {
          chord: 'C',
          scaleDegree: 'I'
        },
        {
          chord: 'Dm',
          scaleDegree: 'II'
        },
        {
          chord: 'Em',
          scaleDegree: 'III'
        },
        {
          chord: 'F',
          scaleDegree: 'IV'
        },
        {
          chord: 'G',
          scaleDegree: 'V'
        },
        {
          chord: 'Am',
          scaleDegree: 'VI'
        },
        {
          chord: 'Bdim',
          scaleDegree: 'VII'
        }

      ]
    },
    {
      name: 'G',
      scale: [
        {
          note: 'G',
          scaleDegree: 1
        },
        {
          note: 'A',
          scaleDegree: 2
        },
        {
          note: 'B',
          scaleDegree: 3
        },
        {
          note: 'C',
          scaleDegree: 4
        },
        {
          note: 'D',
          scaleDegree: 5
        },
        {
          note: 'E',
          scaleDegree: 6
        },
        {
          note: 'F#',
          scaleDegree: 7
        }
      ],
      chords: [
        {
          chord: 'G',
          scaleDegree: 'I'
        },
        {
          chord: 'Am',
          scaleDegree: 'II'
        },
        {
          chord: 'Bm',
          scaleDegree: 'III'
        },
        {
          chord: 'C',
          scaleDegree: 'IV'
        },
        {
          chord: 'D',
          scaleDegree: 'V'
        },
        {
          chord: 'Em',
          scaleDegree: 'VI'
        },
        {
          chord: 'F#dim',
          scaleDegree: 'VII'
        }
      ]
    }
  ]);

  majorChords$: Observable<Chord[]> = of([
    {name: 'C', type: 'major', notes: ['C', 'E', 'G']},
    {name: 'C#', type: 'major', notes: ['C#', 'F', 'G#']},
    {name: 'D', type: 'major', notes: ['D', 'F#', 'A']},
    {name: 'D#', type: 'major', notes: ['D#', 'G', 'A#']},
    {name: 'E', type: 'major', notes: ['E', 'G#', 'B']},
    {name: 'F', type: 'major', notes: ['F', 'A', 'C']},
    {name: 'F#', type: 'major', notes: ['F#', 'A#', 'C#']},
    {name: 'G', type: 'major', notes: ['G', 'B', 'D']},
    {name: 'G#', type: 'major', notes: ['G#', 'C', 'D#']},
    {name: 'A', type: 'major', notes: ['A', 'C#', 'E']},
    {name: 'A#', type: 'major', notes: ['A#', 'D', 'F']},
    {name: 'B', type: 'major', notes: ['B', 'D#', 'F#']}
  ]);

  minorChords$: Observable<Chord[]> = of([
    {name: 'Cm', type: 'minor', notes: ['C', 'D#', 'G']},
    {name: 'C#m', type: 'minor', notes: ['C#', 'E', 'G#']},
    {name: 'Dm', type: 'minor', notes: ['D', 'F', 'A']},
    {name: 'D#m', type: 'minor', notes: ['D#', 'F#', 'A#']},
    {name: 'Em', type: 'minor', notes: ['E', 'G', 'B']},
    {name: 'Fm', type: 'minor', notes: ['F', 'G#', 'C']},
    {name: 'F#m', type: 'minor', notes: ['F#', 'A', 'C#']},
    {name: 'Gm', type: 'minor', notes: ['G', 'A#', 'D']},
    {name: 'G#m', type: 'minor', notes: ['G#', 'B', 'D#']},
    {name: 'Am', type: 'minor', notes: ['A', 'C', 'E']},
    {name: 'A#m', type: 'minor', notes: ['A#', 'C#', 'F']},
    {name: 'Bm', type: 'minor', notes: ['B', 'D', 'F#']}
  ]);

  dimChords$: Observable<Chord[]> = of([
    {name: 'Cdim', type: 'dim', notes: ['C', 'D#', 'F#']},
    {name: 'C#dim', type: 'dim', notes: ['C#', 'E', 'G']},
    {name: 'Ddim', type: 'dim', notes: ['D', 'F', 'G#']},
    {name: 'D#dim', type: 'dim', notes: ['D#', 'F#', 'A']},
    {name: 'Edim', type: 'dim', notes: ['E', 'G', 'A#']},
    {name: 'Fdim', type: 'dim', notes: ['F', 'G#', 'B']},
    {name: 'F#dim', type: 'dim', notes: ['F#', 'A', 'C']},
    {name: 'Gdim', type: 'dim', notes: ['G', 'A#', 'C#']},
    {name: 'G#dim', type: 'dim', notes: ['G#', 'B', 'D']},
    {name: 'Adim', type: 'dim', notes: ['A', 'C', 'D#']},
    {name: 'A#dim', type: 'dim', notes: ['A#', 'C#', 'E']},
    {name: 'Bdim', type: 'dim', notes: ['B', 'D', 'F']}
  ]);

  chords$: Observable<Chord[]> = forkJoin( // todo - methods should be properties
    this.majorChords$,
    this.minorChords$,
    this.dimChords$
  ).pipe(map(([major, minor, dim]) => major.concat(minor, dim)));


  constructor() { }



  // getChord(chordName: string): Observable<Chord> {
  //   const chord: Observable<Chord> = this.getChords()
  //     .pipe(map((chords: Chord[]) => chords.find(c => c.name === chordName)));
  //
  //   if (!chord) {
  //     console.log('Unable to find chord', chord); // todo - logger. Observable ok?
  //   }
  //   return chord;
  // }
  //
  // getScale(scaleName: string): Observable<Scale> {
  //   const scale: Observable<Scale> = this.scales$
  //     .pipe(map((s: Scale[]) => s.find(s => s.name === scaleName)));
  //
  //   if (!scale) {
  //     console.log('Unable to find scale', scale); // todo - logger. Observable ok?
  //   }
  //   return scale;
  // }

  getChordsInScale(scaleName$: Observable<string>): Observable<ScaleChord[]> {
    return combineLatest([scaleName$, this.scales$])
      .pipe(
        map(([scaleName, scales]) => scales.find(scale => scale.name === scaleName)),
        map(scale => scale.chords)
        );
    // return this.scales$.pipe(
    //     map((scales1: Scale[]) => scales1.find(s => s.name === scaleName)),
    //     map(s => s.chords)
    //   );
  // .pipe(
  //     map(([scales, selectedScale]) =>
  //       scales.find(scale => selectedScale ? scale.name === selectedScale : true)
  //     ));

  }

  getScaleChordProgression(scaleName$: Observable<string>, scaleDegreesInput$: Observable<string[]>): Observable<Play[]> {
    const scaleChords$: Observable<ScaleChord[]> = this.getChordsInScale(scaleName$);
    const scaleDegreesWithScaleChordsAndNotes$ = combineLatest([scaleChords$, scaleDegreesInput$, this.chords$]);

    return scaleDegreesWithScaleChordsAndNotes$.pipe(
      map(([scaleChords, scaleDegrees, chords]) =>
        scaleDegrees.map(degree => {
          const scaleChord = scaleChords.find(sc => sc.scaleDegree === degree);
          scaleChord.notes = chords.find(c => c.name === scaleChord.chord).notes;
          const play: Play = {
            pianoNotes: chords.find(c => c.name === scaleChord.chord).notes.map(n => n.concat('4'))
          };
          return play;
        }
      )
      )
    );


      //     ({
      //       ...scaleChords.find(sc => sc.scaleDegree === degree),
      //       notes: chords.find(n => n.)
      //     }) as ScaleChord
      //   })
      // ));

    // return scaleDegreesWithScaleChordsAndNotes$.pipe(
    //   map(([scaleChords, scaleDegrees, notes]) =>
    //     scaleDegrees.map(degree => {
    //       return scaleChords.find(sc => sc.scaleDegree === degree);
    //     })
    //   ));
  }


  // getScaleChordProgression(scale: string, scaleDegreesInput: string[]): Observable<ScaleChord[]> {
  //   const scaleChords$: Observable<ScaleChord[]> = this.getChordsInScale(scale);
  //   const scaleDegreesWithScaleChords$ = forkJoin([scaleChords$, of(scaleDegreesInput)]);
  //
  //   return scaleDegreesWithScaleChords$.pipe(
  //     map(([scaleChords, scaleDegrees]) =>
  //       scaleDegrees.map(degree => {
  //         return scaleChords.find(sc => sc.scaleDegree === degree);
  //       })
  //   ));
  //
  // }
}

