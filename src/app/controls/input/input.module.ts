// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
