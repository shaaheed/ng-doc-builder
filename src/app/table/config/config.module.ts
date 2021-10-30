// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPickerModule } from 'src/app/shared/input-picker/input-picker.module';
import { OptionPickerModule } from 'src/app/shared/option-picker/option-picker.module';
import { TableConfigComponent } from './config.component';

@NgModule({
  declarations: [
    TableConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPickerModule,
    OptionPickerModule
  ],
  exports: [
    TableConfigComponent
  ]
})
export class TableConfigModule { }
