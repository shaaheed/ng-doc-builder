// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuffixInputComponent } from './suffix-input.component';
import { InputModule } from 'src/app/controls/input/input.module';
import { SelectModule } from 'src/app/controls/select/select.module';

@NgModule({
  declarations: [
    SuffixInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    SelectModule
  ],
  exports: [
    SuffixInputComponent
  ]
})
export class SuffixInputModule { }
