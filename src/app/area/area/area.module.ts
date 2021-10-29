// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlsModule } from '../../shared/controls/controls.module';
import { AreaComponent } from './area.component';

@NgModule({
  declarations: [
    AreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule
  ],
  exports: [
    AreaComponent
  ]
})
export class AreaModule { }
