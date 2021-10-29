// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent implements OnInit {

  @Input() showCopy: boolean = true;
  @Input() showDelete: boolean = true;
  @Input() showRotate: boolean = true;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() copy: EventEmitter<any> = new EventEmitter();
  @Output() rotate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }

  onCopy() {
    this.copy.emit();
  }

  onRotate() {
    this.rotate.emit();
  }

}