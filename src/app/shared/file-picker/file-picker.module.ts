// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilePickerComponent } from './file-picker.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    FilePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule
  ],
  exports: [
    FilePickerComponent
  ]
})
export class FilePickerModule { }
