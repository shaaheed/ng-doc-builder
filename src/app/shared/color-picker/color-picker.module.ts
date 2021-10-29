// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModule } from 'src/app/controls/input/input.module';
import { SelectModule } from 'src/app/controls/select/select.module';
import { SwitchModule } from 'src/app/controls/switch/switch.module';
import { ColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    SwitchModule,
    InputModule
  ],
  exports: [
    ColorPickerComponent
  ]
})
export class ColorPickerModule { }
