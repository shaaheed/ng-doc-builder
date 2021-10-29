// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-controls',
  templateUrl: './text-controls.component.html'
})
export class TextControlsComponent implements OnInit {

  @Input() align: string = '';
  @Output() alignChange: EventEmitter<string> = new EventEmitter();
  @Input() bold: boolean = false;
  @Output() boldChange: EventEmitter<boolean> = new EventEmitter();
  @Input() underline: boolean = false;
  @Output() underlineChange: EventEmitter<boolean> = new EventEmitter();
  @Input() italic: boolean = false;
  @Output() italicChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleOption(option: string) {
    const _this = this as any;
    _this[option] = !_this[option];
    _this[`${option}Change`].emit(_this[option]);
  }

  changeAlign(align: string) {
    this.align = align;
    this.alignChange.emit(this.align);
  }

}