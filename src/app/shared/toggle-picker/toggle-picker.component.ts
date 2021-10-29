// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-picker',
  templateUrl: './toggle-picker.component.html'
})
export class TogglePickerComponent implements OnInit {

  @Input() title: string = '';
  @Input() model: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleChange(e: any) {
    this.modelChange.emit(e.checked);
  }

}