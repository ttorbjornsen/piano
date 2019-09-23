export type Note = 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A' | 'A#' | 'Bb' | 'B';
export type Voicing = 'root' | '1st' | '2nd';

/**
 * C major key actually represents a nickname for a scale (collection of notes).
 * Key is the center of gravity established by chord progressions.
 * Modes are based on the Scale, not the key
 */
export interface Scale {
  name: string;
  scale: ScaleNote[]; // scala is a collection of scale
  chords: ScaleChord[];
  modes?: string[];
}

export interface ScaleNote {
  note: Note;
  scaleDegree: number;
}

// export interface ScaleDegree {
//   degreeName?: 'tonic' | 'supertonic' | 'mediant'; // and so on
//   degreeNumber?: number;
// }

export interface ScaleChord {
  chord: string; //lookup actual chord using chord name. Rename to chord name?
  scaleDegree: string;
  notes?: Note[];
  temp?: string[];
}

export interface Play {
  pianoNotes: string[];
}

export interface Chord {
  name: string;
  type: string;
  notes: Note[];
  alternativeName?: string;
  musicXml?: string;
}

export interface ChordProgression {
  scaleChords: ScaleChord[];
}
