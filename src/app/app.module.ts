import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { reducer, PIZZA_FEATURE_NAME } from './pizza.store';


import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule, ReactiveComponentModule,
    StoreModule.forRoot({
      [PIZZA_FEATURE_NAME]:reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
