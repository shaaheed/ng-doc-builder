// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TogglePickerComponent } from './toggle-picker.component';
import { SwitchModule } from 'src/app/controls/switch/switch.module';

@NgModule({
  declarations: [
    TogglePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SwitchModule
  ],
  exports: [
    TogglePickerComponent
  ]
})
export class TogglePickerModule { }
