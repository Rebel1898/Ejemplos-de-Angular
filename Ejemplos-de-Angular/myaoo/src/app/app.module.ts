import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiheaderComponent } from './miheader/miheader.component';
import { MifooterComponent } from './mifooter/mifooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MiheaderComponent,
    MifooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
