import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isButtonPressed = false;

  onButtonPress() {
    this.isButtonPressed = true;
  }

  onButtonRelease() {
    this.isButtonPressed = false
  }

  private synth: Tone.Synth;


  ngOnInit(): void {
    this.synth = new Tone.Synth().toDestination();

  }

  c3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("C3", "4n");
  }
  cSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("C#3", "4n");
  }

  d3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("D3", "4n");
  }
  dSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("D#3", "4n");
  }
  e3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("E3", "4n");
  }
  f3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("F3", "4n");
  }
  fSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("F#3", "4n");
  }
  g3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("G3", "4n");
  }
  gSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("G#3", "4n");
  }
  a4() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("A3", "4n");
  }
  aSharp3() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("A#3", "4n");
  }
  b4() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("B3", "4n");
  }
  c4() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    this.synth.triggerAttackRelease("C4", "4n");
  }


}
