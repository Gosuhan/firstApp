import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExComponent1Component } from './ex-component1/ex-component1.component';


@NgModule({
  declarations: [
    AppComponent,
    ExComponent1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
