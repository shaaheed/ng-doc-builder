import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-picker',
  template: `
  <div class="picker">
    <h5>{{title}}</h5>
    <div class="control toggle-picker">
      <mat-slide-toggle [checked]="model" (change)="toggleChange($event)"></mat-slide-toggle>
    </div>
  </div>
  `
})
export class TogglePickerComponent implements OnInit {

  @Input() title: string;
  @Input() model: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleChange(e) {
    this.modelChange.emit(e.checked);
  }

}
