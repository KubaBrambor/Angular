import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service/service.service';
import { MainCourseComponent } from './component/main-course/main-course.component';
import { DrinksComponent } from './component/drinks/drinks.component';
import { DessersComponent } from './component/dessers/dessers.component';
import { FormComponent } from './component/form/form.component';
import { FormReactiveComponent } from './component/form-reactive/form-reactive.component';
import { NextFormComponent } from './component/next-form/next-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainCourseComponent,
    DrinksComponent,
    DessersComponent,
    FormComponent,
    FormReactiveComponent,
    NextFormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
