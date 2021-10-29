// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent implements OnInit {

  @Input() title: string = '';
  @Input() model: string = '';
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  colorInputChangeEvent(e: any) {
    this.model = e.target.value;
    this.modelChange.emit(e.target.value)
  }

}
