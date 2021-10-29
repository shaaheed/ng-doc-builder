// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  @Input() value: any;
  @Input() prefix: string = '';
  @Input() placeholder: string = '';
  @Input() suffix: string | TemplateRef<any> = '';
  @Input() canSuffixShow: boolean = true;
  @Input() inputStyle = {};
  @Input() disabled = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() set type(value: string | undefined) {
    value = value?.toLowerCase();
    if (value) {
      if ([
        'number',
        'integer',
        'int',
        'double',
        'float',
        'decimal'
      ].includes(value)) {
        value = 'number';
      }
      else if (['string', 'text'].includes(value)) {
        value = 'text';
      }
    }
    this._type = value ?? 'text';
  }

  get type() {
    return this._type;
  }

  private _type: string = 'text';

  ngOnInit() { }

  onValueChange(e: any) {
    this.onChange.emit(e);
  }

}