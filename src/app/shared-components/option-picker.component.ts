import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-picker',
  template: `
  <div class="picker">
    <h5>{{title}}</h5>
    <div class="control option-picker">
      <mat-select placeholder="Font Family" [value]="model" (selectionChange)="fontChangeEvent($event)">
        <mat-option *ngFor="let option of options" [value]="option.value">
          {{option.name}}
        </mat-option>
      </mat-select>
    </div>
  </div>
  `
})
export class OptionPickerComponent implements OnInit {

  @Input() options: any[];
  @Input() title: string;
  @Input() model: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fontChangeEvent(e) {
    this.model = e.value;
    this.modelChange.emit(e.value);
  }

}
