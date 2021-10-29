// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isString } from '../../utils/utils';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {

  @Input() set value(v: any) {
    if (this.mode == 'multiple' && isString(v)) {
      this._value = [v];
    }
    else {
      this._value = v;
    }
  };

  get value(): any | any[] {
    return this._value;
  }

  @Input() loading: boolean = false;
  @Input() placeholder: string = 'Select';
  @Input() disabled = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() options: any[] = [];
  @Input() mode: any = 'default';

  private _value: any;

  ngOnInit() { }

  onValueChange(e: any) {
    this.onChange.emit(e);
    this._value = e;
  }
}