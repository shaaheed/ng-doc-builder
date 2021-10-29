// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzSelectModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
