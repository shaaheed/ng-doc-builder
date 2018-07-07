import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-picker',
  template: `
  <div class="picker">
    <h5>{{title}}</h5>
    <div class="control input-picker">
      <input [value]="model" (input)="inputChange($event)" type="text">
      <span>px</span>
    </div>
  </div>
  `
})
export class InputPickerComponent implements OnInit {

  @Input() title: string;
  @Input() model: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  inputChange(e) {
    this.modelChange.emit(parseInt(e.target.value));
  }

}
