// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPickerComponent } from './input-picker.component';
import { SuffixInputModule } from 'src/app/controls/suffix-input/suffix-input.module';

@NgModule({
  declarations: [
    InputPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuffixInputModule
  ],
  exports: [
    InputPickerComponent
  ]
})
export class InputPickerModule { }
