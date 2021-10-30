// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlsModule } from '../../shared/controls/controls.module';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule
  ],
  exports: [
    TextComponent
  ]
})
export class TextModule { }
