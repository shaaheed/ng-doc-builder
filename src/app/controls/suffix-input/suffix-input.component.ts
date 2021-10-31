// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suffix-input',
  templateUrl: './suffix-input.component.html'
})
export class SuffixInputComponent implements OnInit {

  @Input() title: string = '';
  @Input() value: any;
  @Input() suffixOptions: any[] = [];
  @Input() suffixOption: string = 'px';
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() suffixChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  inputChange(e: any) {
    this.onChange.emit(parseInt(e));
  }

  onSuffixChange(e: any) {
    this.suffixOption = e;
    this.suffixChange.emit(e);
  }

}