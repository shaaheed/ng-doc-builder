// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlsModule } from '../../shared/controls/controls.module';
import { ImageComponent } from './image.component';

@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule
  ],
  exports: [
    ImageComponent
  ]
})
export class ImageModule { }
