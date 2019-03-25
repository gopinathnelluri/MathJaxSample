import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MathJaxModule} from 'ngx-mathjax';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MathJaxModule.config({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
