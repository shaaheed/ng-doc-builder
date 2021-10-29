// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPickerComponent } from './input-picker.component';
import { InputModule } from 'src/app/controls/input/input.module';

@NgModule({
  declarations: [
    InputPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule
  ],
  exports: [
    InputPickerComponent
  ]
})
export class InputPickerModule { }
