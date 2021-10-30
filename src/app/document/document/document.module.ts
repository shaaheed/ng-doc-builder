// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AreaModule } from 'src/app/area/area/area.module';
import { LineModule } from 'src/app/line/line/line.module';
import { TableModule } from 'src/app/table/table/table.module';
import { TextModule } from 'src/app/text/text/text.module';
import { ControlsModule } from '../../shared/controls/controls.module';
import { DocumentComponent } from './document.component';

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule,
    TextModule,
    LineModule,
    AreaModule,
    TableModule
  ],
  exports: [
    DocumentComponent
  ]
})
export class DocumentModule { }
