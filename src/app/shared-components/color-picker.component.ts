import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  template: `

  <div class="picker">
    <h5>{{title}}</h5>
    <div class="control color-picker">
    <span class="color-name">{{model}}</span>
    <span (click)="colorInput.click()" class="color cursor-pointer" [style.background]="model"></span>
    <input [value]="model" (input)="colorInputChangeEvent($event)" #colorInput hidden type="color" />
  </div>
  `
})
export class ColorPickerComponent implements OnInit {

  @Input() title: string;
  @Input() model: string;
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  colorInputChangeEvent(e) {
    this.model = e.target.value;
    this.modelChange.emit(e.target.value)
  }

}
