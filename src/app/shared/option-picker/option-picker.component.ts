// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-picker',
  templateUrl: './option-picker.component.html'
})
export class OptionPickerComponent implements OnInit {

  @Input() options: any[] = [];
  @Input() title: string = '';
  @Input() model: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fontChangeEvent(e: any) {
    this.model = e.value;
    this.modelChange.emit(e.value);
  }

}