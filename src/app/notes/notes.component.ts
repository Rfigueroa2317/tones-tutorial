import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  isButtonPressed = false;
  private synth: Tone.Synth;c

  constructor() { }

  onButtonPress() {
    this.isButtonPressed = true;
  }

  onButtonRelease() {
    this.isButtonPressed = false
  }


  ngOnInit(): void {
    this.synth = new Tone.Synth().toDestination();

  }

 @HostListener('window:keydown.s') c3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("C3", "4n");
  }
  @HostListener('window:keydown.e')cSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("C#3", "4n");
  }

  @HostListener('window:keydown.d') d3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("D3", "4n");
  }
  @HostListener('window:keydown.r')dSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("D#3", "4n");
  }
  @HostListener('window:keydown.f') e3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("E3", "4n");
  }
  @HostListener('window:keydown.j')f3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("F3", "4n");
  }
  @HostListener('window:keydown.u')fSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("F#3", "4n");
  }
  @HostListener('window:keydown.k')g3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("G3", "4n");
  }
  @HostListener('window:keydown.i')gSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("G#3", "4n");
  }
  @HostListener('window:keydown.l')a4() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("A3", "4n");
  }
  @HostListener('window:keydown.o')aSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("A#3", "4n");
  }
  @HostListener('window:keydown.;')b4() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("B3", "4n");
  }
  @HostListener('window:keydown.p')c4() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("C4", "4n");
  }

}
