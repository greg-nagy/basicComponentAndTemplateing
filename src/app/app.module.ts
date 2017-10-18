import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlmaComponent } from './alma/alma.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    AlmaComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
