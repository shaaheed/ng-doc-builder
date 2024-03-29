// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModule } from 'src/app/controls/input/input.module';
import { SelectModule } from 'src/app/controls/select/select.module';
import { SuffixInputModule } from 'src/app/controls/suffix-input/suffix-input.module';
import { SwitchModule } from 'src/app/controls/switch/switch.module';
import { BorderPickerComponent } from './border-picker.component';

@NgModule({
  declarations: [
    BorderPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    SwitchModule,
    InputModule,
    SuffixInputModule
  ],
  exports: [
    BorderPickerComponent
  ]
})
export class BorderPickerModule { }
