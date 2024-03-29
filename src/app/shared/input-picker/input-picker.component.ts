// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-picker',
  templateUrl: './input-picker.component.html'
})
export class InputPickerComponent implements OnInit {

  @Input() title: string = '';
  @Input() model: any;
  @Input() suffixOptions: any[] = [];
  @Input() suffixOption: string = 'px';
  @Output() modelChange: EventEmitter<any> = new EventEmitter();
  @Output() suffixChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  inputChange(e: any) {
    this.modelChange.emit(parseInt(e));
  }

  onSuffixChange(e: any) {
    this.suffixOption = e;
    this.suffixChange.emit(e);
  }

}