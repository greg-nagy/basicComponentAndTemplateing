import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlmaComponent } from './alma/alma.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { AzenpipeomPipe } from './listdemo/azenpipeom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlmaComponent,
    EventComponent,
    ListdemoComponent,
    AzenpipeomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
