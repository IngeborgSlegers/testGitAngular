import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CupsComponent } from './cups/cups.component';
import { StarWarsComponent } from './star-wars/star-wars.component';

@NgModule({
  declarations: [
    AppComponent,
    CupsComponent,
    StarWarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
