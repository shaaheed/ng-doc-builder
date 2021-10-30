// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModule } from 'src/app/controls/input/input.module';
import { DocumentConfigComponent } from './config.component';

@NgModule({
  declarations: [
    DocumentConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule
  ],
  exports: [
    DocumentConfigComponent
  ]
})
export class DocumentConfigModule { }
