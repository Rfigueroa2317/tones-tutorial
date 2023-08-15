import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { MidiService } from './midi.service';
import { NotesComponent } from './notes/notes.component';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

}
