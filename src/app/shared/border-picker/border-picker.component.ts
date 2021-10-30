// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constant } from '../../common/constant';

@Component({
  selector: 'app-border-picker',
  templateUrl: './border-picker.component.html'
})
export class BorderPickerComponent implements OnInit {

  @Input() title: string = '';
  @Input() border: boolean = false;
  @Output() borderChange: EventEmitter<boolean> = new EventEmitter();
  @Input() borderWidth: number = 1;
  @Output() borderWidthChange: EventEmitter<number> = new EventEmitter();
  @Input() borderStyle: string = '';
  @Output() borderStyleChange: EventEmitter<string> = new EventEmitter();
  @Input() borderColor: string = '#000000';
  @Output() borderColorChange: EventEmitter<string> = new EventEmitter();

  isColorEditable: boolean = false;
  options = constant.borderOptions;

  constructor() { }

  ngOnInit() {
  }

  toggleChange(e: any) {
    this.border = e.checked;
    this.borderChange.emit(e.checked);
  }

  borderWidthChangeEvent(e: any) {
    const value = parseInt(e.target.value);
    this.borderWidth = value
    this.borderWidthChange.emit(value);
  }

  borderStyleChangeEvent(e: any) {
    this.borderStyle = e.value;
    this.borderStyleChange.emit(e.value);
  }

  colorInputChangeEvent(e: any) {
    this.borderColor = e.target.value;
    this.borderColorChange.emit(e.target.value)
  }

  makeColorEditable(isEditable: boolean) {
    this.isColorEditable = isEditable;
  }

}
