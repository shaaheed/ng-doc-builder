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
  MatSelectModule
} from '@angular/material';
import { TextComponent } from './text/text.component';
import { CommonService } from './services/common.service';
import { InputPickerComponent } from './shared-components/input-picker.component';
import { FilePickerComponent } from './shared-components/file-picker.component';
import { TogglePickerComponent } from './shared-components/toggle-picker.component';
import { BorderPickerComponent } from './shared-components/border-picker.component';


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
    BorderPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [CommonService, ImageService],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent, TextComponent]
})
export class AppModule { }
