// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BorderPickerModule } from 'src/app/shared/border-picker/border-picker.module';
import { ColorPickerModule } from 'src/app/shared/color-picker/color-picker.module';
import { InputPickerModule } from 'src/app/shared/input-picker/input-picker.module';
import { AreaConfigComponent } from './config.component';

@NgModule({
  declarations: [
    AreaConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPickerModule,
    ColorPickerModule,
    BorderPickerModule
  ],
  exports: [
    AreaConfigComponent
  ]
})
export class AreaConfigModule { }
