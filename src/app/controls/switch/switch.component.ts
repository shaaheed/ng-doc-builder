// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent {

  @Input() value: any;
  @Input() inputStyle = {};
  @Input() disabled = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() { }

  onValueChange(e: any) {
    this.onChange.emit(e);
  }

}