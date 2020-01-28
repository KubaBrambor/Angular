import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PomiarComponent } from './pomiar/pomiar.component';
import { PomiarDataComponent } from './pomiar-data/pomiar-data.component';
import { PomiarServiceService } from './services/pomiar-service.service'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PomiarComponent,
    PomiarDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PomiarServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
