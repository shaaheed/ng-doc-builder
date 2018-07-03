import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    // DraggableDirective,
    // DroppableDirective,
    AppComponent,
    DocumentComponent,
    HeaderComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent]
})
export class AppModule { }
