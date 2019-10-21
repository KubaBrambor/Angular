import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsChairComponent } from './products/products-chair/products-chair.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsChairComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
