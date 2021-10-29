// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { SwitchComponent } from './switch.component';

@NgModule({
  declarations: [
    SwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzSwitchModule
  ],
  exports: [
    SwitchComponent
  ]
})
export class SwitchModule { }
