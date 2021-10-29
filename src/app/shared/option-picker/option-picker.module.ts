// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OptionPickerComponent } from './option-picker.component';
import { SelectModule } from 'src/app/controls/select/select.module';

@NgModule({
  declarations: [
    OptionPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectModule
  ],
  exports: [
    OptionPickerComponent
  ]
})
export class OptionPickerModule { }
