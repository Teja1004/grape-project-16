import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrapeComponent } from './greps.component';
import { NgxGrapesjsModule } from 'ngx-grapesjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGrapesjsModule
  ],
  providers: [],
  bootstrap: [AppComponent, GrapeComponent]
})
export class AppModule { }
