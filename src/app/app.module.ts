import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgSliderModule } from './img-slider/img-slider.module';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { GalleryConfig } from './image-gallery/token';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImgSliderModule,
    ImageGalleryModule,
  ],
  // providers: [AuthService],
  providers: [
    {provide: GalleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }