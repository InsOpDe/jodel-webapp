import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { ResultContentComponent } from './content/result-content/result-content.component';
import {ContentService} from './content.service';
import { MapContentComponent } from './content/map-content/map-content.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    HeaderComponent,
    ContentComponent,
    ResultContentComponent,
    MapContentComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [
      ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
