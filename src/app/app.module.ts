import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { ImageConfigComponent } from './image-config/image-config.component';
import { CommonService } from './common.service';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    HeaderComponent,
    ImageComponent,
    ImageConfigComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent]
})
export class AppModule { }
