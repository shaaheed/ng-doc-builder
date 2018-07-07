import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-border-picker',
  template: `

  <div class="picker" [class.box-shadow-none]="border">
    <h5>{{title}}</h5>
    <div class="control toggle-picker">
      <mat-slide-toggle [checked]="border" (change)="toggleChange($event)"></mat-slide-toggle>
    </div>
  </div>
  <div class="picker padding-top-0" *ngIf="border">
    <div class="control border-picker">
      <div class="border-picker-item border-width-picker">
        <input [value]="borderWidth" (input)="borderWidthChangeEvent($event)" type="text">
        <span>px</span>
      </div>
      <div class="border-picker-item border-style-picker">
        <mat-select placeholder="Style" [value]="borderStyle" (selectionChange)="borderStyleChangeEvent($event)">
          <mat-option *ngFor="let option of options" [value]="option.value">
            {{option.name}}
          </mat-option>
        </mat-select>
      </div>
      <div class="border-picker-item border-color-picker">
        <span class="color-name">{{borderColor}}</span>
        <span (click)="colorInput.click()" class="color cursor-pointer" [style.background]="borderColor"></span>
        <input [value]="borderColor" (input)="colorInputChangeEvent($event)" #colorInput hidden type="color" />
      </div>
    </div>
  </div>
  `
})
export class BorderPickerComponent implements OnInit {

  @Input() title: string;
  @Input() border: boolean;
  @Output() borderChange: EventEmitter<boolean> = new EventEmitter();
  @Input() borderWidth: number = 1;
  @Output() borderWidthChange: EventEmitter<number> = new EventEmitter();
  @Input() borderStyle: string;
  @Output() borderStyleChange: EventEmitter<string> = new EventEmitter();
  @Input() borderColor: string = '#000000';
  @Output() borderColorChange: EventEmitter<string> = new EventEmitter();

  options = [
    {
      name: 'Solid',
      value: 'solid'
    },
    {
      name: 'Dashed',
      value: 'dashed'
    },
    {
      name: 'Dotted',
      value: 'dotted'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleChange(e) {
    this.border = e.checked;
    this.borderChange.emit(e.checked);
  }

  borderWidthChangeEvent(e) {
    const value = parseInt(e.target.value);
    this.borderWidth = value
    this.borderWidthChange.emit(value);
  }

  borderStyleChangeEvent(e) {
    this.borderStyle = e.value;
    this.borderStyleChange.emit(e.value);
  }

  colorInputChangeEvent(e) {
    this.borderColor = e.target.value;
    this.borderColorChange.emit(e.target.value)
  }

}
