import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {AoiAnalyticModule} from './aoi-analytic/aoi-analytic.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AoiAnalyticModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
