// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'src/app/shared/color-picker/color-picker.module';
import { InputPickerModule } from 'src/app/shared/input-picker/input-picker.module';
import { OptionPickerModule } from 'src/app/shared/option-picker/option-picker.module';
import { TextControlsModule } from 'src/app/shared/text-controls/text-controls.module';
import { TextConfigComponent } from './config.component';

@NgModule({
  declarations: [
    TextConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPickerModule,
    OptionPickerModule,
    ColorPickerModule,
    TextControlsModule
  ],
  exports: [
    TextConfigComponent
  ]
})
export class TextConfigModule { }
