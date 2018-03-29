import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BarChartComponent } from './content/shared/chart/bar-chart/bar-chart.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { ResultContentComponent } from './content/your-result-content/result-content/result-content.component';
import {ContentService} from './content.service';
import { MapContentComponent } from './content/shared/map-content/map-content.component';
import { YourResultContentComponent } from './content/your-result-content/your-result-content.component';
import { KeywordBarchartContentComponent } from './content/shared/keywords-barchar/keyword-barchart-content.component';
import { TimeContentComponent } from './content/shared/time-content/time-content.component';
import { KeywordContentComponent } from './content/keyword-content/keyword-content.component';
import { ColorPaletteComponent } from './header/color-palette/color-palette.component';
import { ContentPageSelectionComponent } from './header/content-page-selection/content-page-selection.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeChartComponent } from './content/shared/chart/time-chart/time-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    HeaderComponent,
    ContentComponent,
    ResultContentComponent,
    MapContentComponent,
    YourResultContentComponent,
    KeywordBarchartContentComponent,
    TimeContentComponent,
    KeywordContentComponent,
    ColorPaletteComponent,
    ContentPageSelectionComponent,
    TimeChartComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [
      ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
