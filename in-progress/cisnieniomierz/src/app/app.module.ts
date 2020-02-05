import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
<<<<<<< HEAD
import { PomiarListComponent } from './pomiar-list/pomiar-list.component';
=======
import { PomiarComponent } from './pomiar/pomiar.component';
import { PomiarDataComponent } from './pomiar-data/pomiar-data.component';
import { PomiarServiceService } from './services/pomiar-service.service'
>>>>>>> 9715230560fe7901c524ccd12c4e4d6d387bf6dc

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
<<<<<<< HEAD
    PomiarListComponent
=======
    PomiarComponent,
    PomiarDataComponent
>>>>>>> 9715230560fe7901c524ccd12c4e4d6d387bf6dc
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
