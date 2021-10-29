// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image/image.component';
import { ImageConfigComponent } from './image-config/image-config.component';
import { ImageService } from './services/image.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { CommonService } from './services/common.service';
import { BorderPickerComponent } from './shared/border-picker/border-picker.component';
import { TextConfigComponent } from './text-config/text-config.component';
import { ColorPickerComponent } from './shared/color-picker/color-picker.component';
import { LineComponent } from './line/line.component';
import { LineConfigComponent } from './line-config/line-config.component';
import { TableComponent } from './table/table.component';
import { TableConfigComponent } from './table-config/table-config.component';
import { DocumentConfigComponent } from './document-config/document-config.component';
import { AreaComponent } from './area/area/area.component';
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

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    DocumentConfigComponent,
    HeaderComponent,
    ImageComponent,
    ImageConfigComponent,
    TextComponent,
    BorderPickerComponent,
    TextConfigComponent,
    ColorPickerComponent,
    LineComponent,
    LineConfigComponent,
    TableComponent,
    TableConfigComponent,
    AreaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputPickerModule,
    FilePickerModule,
    TogglePickerModule,
    OptionPickerModule,
    TextControlsModule,
    ControlsModule,
    AreaConfigModule,
  ],
  providers: [
    CommonService,
    ImageService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
