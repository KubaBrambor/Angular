import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service/service.service';
import { MainCourseComponent } from './component/main-course/main-course.component';
import { DrinksComponent } from './component/drinks/drinks.component';
import { DessersComponent } from './component/dessers/dessers.component';
import { FormComponent } from './component/form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    MainCourseComponent,
    DrinksComponent,
    DessersComponent,
    FormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
