import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { ImageConfigComponent } from './image-config/image-config.component';
import { ImageService } from './services/image.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatSlideToggleModule,
  MatCommonModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatSliderModule
} from '@angular/material';
import { TextComponent } from './text/text.component';
import { CommonService } from './services/common.service';
import { InputPickerComponent } from './shared-components/input-picker.component';
import { FilePickerComponent } from './shared-components/file-picker.component';
import { TogglePickerComponent } from './shared-components/toggle-picker.component';
import { BorderPickerComponent } from './shared-components/border-picker.component';
import { TextConfigComponent } from './text-config/text-config.component';
import { OptionPickerComponent } from './shared-components/option-picker.component';
import { ColorPickerComponent } from './shared-components/color-picker.component';
import { TextControlsComponent } from './shared-components/text-controls.component';
import { LineComponent } from './line/line.component';
import { LineConfigComponent } from './line-config/line-config.component';
import { TableComponent } from './table/table.component';
import { TableConfigComponent } from './table-config/table-config.component';
import { ControlsComponent } from './shared-components/controls.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    HeaderComponent,
    ImageComponent,
    ImageConfigComponent,
    TextComponent,
    InputPickerComponent,
    FilePickerComponent,
    TogglePickerComponent,
    BorderPickerComponent,
    TextConfigComponent,
    OptionPickerComponent,
    ColorPickerComponent,
    TextControlsComponent,
    LineComponent,
    LineConfigComponent,
    TableComponent,
    TableConfigComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [CommonService, ImageService],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageComponent,
    TextComponent,
    LineComponent,
    TableComponent
  ]
})
export class AppModule { }
