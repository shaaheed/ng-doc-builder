// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BorderPickerModule } from 'src/app/shared/border-picker/border-picker.module';
import { FilePickerModule } from 'src/app/shared/file-picker/file-picker.module';
import { InputPickerModule } from 'src/app/shared/input-picker/input-picker.module';
import { TogglePickerModule } from 'src/app/shared/toggle-picker/toggle-picker.module';
import { ImageConfigComponent } from './config.component';

@NgModule({
  declarations: [
    ImageConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPickerModule,
    FilePickerModule,
    BorderPickerModule,
    TogglePickerModule
  ],
  exports: [
    ImageConfigComponent
  ]
})
export class ImageConfigModule { }
