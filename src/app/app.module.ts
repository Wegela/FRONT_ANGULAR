import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantIndexComponent } from './pages/restaurant-index/restaurant-index.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import {FormsModule} from "@angular/forms";
import { MoyenneDirective } from './directives/moyenne.directive';
import { RestaurantCompleteComponent } from './components/restaurant-complete/restaurant-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantFormComponent,
    RestaurantTableComponent,
    RestaurantIndexComponent,
    RestaurantDetailsComponent,
    MoyenneDirective,
    RestaurantCompleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
