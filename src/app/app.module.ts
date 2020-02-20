import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { EventsModule } from './modules/events/events.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    EventsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
