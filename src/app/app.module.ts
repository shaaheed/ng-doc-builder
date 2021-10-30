// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageService } from './services/image.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { InputPickerModule } from './shared/input-picker/input-picker.module';
import { FilePickerModule } from './shared/file-picker/file-picker.module';
import { TogglePickerModule } from './shared/toggle-picker/toggle-picker.module';
import { OptionPickerModule } from './shared/option-picker/option-picker.module';
import { TextControlsModule } from './shared/text-controls/text-controls.module';
import { ControlsModule } from './shared/controls/controls.module';
import { AreaConfigModule } from './area/config/config.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AreaModule } from './area/area/area.module';
import { TableModule } from './table/table/table.module';
import { TableConfigModule } from './table/config/config.module';
import { ColorPickerModule } from './shared/color-picker/color-picker.module';
import { TextModule } from './text/text/text.module';
import { TextConfigModule } from './text/config/config.module';
import { BorderPickerModule } from './shared/border-picker/border-picker.module';
import { ImageModule } from './image/image/image.module';
import { ImageConfigModule } from './image/config/config.module';
import { HeaderModule } from './header/header.module';
import { DocumentModule } from './document/document/document.module';
import { DocumentConfigModule } from './document/config/config.module';
import { LineConfigModule } from './line/config/config.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    DocumentModule,
    DocumentConfigModule,
    InputPickerModule,
    FilePickerModule,
    TogglePickerModule,
    OptionPickerModule,
    ColorPickerModule,
    BorderPickerModule,
    TextControlsModule,
    ControlsModule,
    TextModule,
    TextConfigModule,
    ImageModule,
    ImageConfigModule,
    AreaModule,
    AreaConfigModule,

    TableConfigModule,
    LineConfigModule,
    NzIconModule
  ],
  providers: [
    CommonService,
    ImageService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
