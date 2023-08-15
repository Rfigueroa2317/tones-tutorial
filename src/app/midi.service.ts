// import { Injectable } from '@angular/core';
// import * as Tone from 'tone';

// @Injectable({
//   providedIn: 'root'
// })
// export class MidiService {
//   private synth: Tone.Synth;

//   constructor() {
//     this.synth = new Tone.Synth().toDestination();
//    }

//    setupMidi() {
//     navigator.requestMIDIAccess().then(MIDIAccess => {
//       const inputs = MIDIAccess.inputs.values();
//       for (const input of inputs) {
//         input.onmidimessage = this.onMidiMessage.bind(this);
//       }
//     })
//    }

//    onMidiMessage(event: WebMidi.MIDIMessageEvent) {
//     const [command, note, velocity] = event.data;
//     if (command === 144) { // Note On
//       this.synth.triggerAttack(Tone.Midi(note).toFrequency());
//     } else if (command === 128) { // Note Off
//       this.synth.triggerRelease();
//     }
//   }
// }
