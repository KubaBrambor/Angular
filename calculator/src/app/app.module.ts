import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'node_modules/ng2-charts'

import { AppComponent } from './app.component';
import { KcalInfoComponent } from './calculator/kcal-info/kcal-info.component';
import { ChartComponent } from './calculator/kcal-info/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    KcalInfoComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }