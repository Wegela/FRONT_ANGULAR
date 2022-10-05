import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantIndexComponent} from "./pages/restaurant-index/restaurant-index.component";
import {RestaurantDetailsComponent} from "./pages/restaurant-details/restaurant-details.component";

const routes: Routes = [
  {
  path: '', redirectTo: 'restaurant', pathMatch: "full"
  },
  {
    path: 'restaurant', component: RestaurantIndexComponent
  },
  {
    path: 'restaurant/:id', component: RestaurantDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
