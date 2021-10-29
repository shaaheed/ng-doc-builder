// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextControlsComponent } from './text-controls.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    TextControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule
  ],
  exports: [
    TextControlsComponent
  ]
})
export class TextControlsModule { }
