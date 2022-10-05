import { Component, OnInit } from '@angular/core';


import {Restaurant} from "../../dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";
import {RestaurantFormContent} from "../../components/restaurant-form/restaurant-form.component";

@Component({
  selector: 'app-restaurant-index',
  templateUrl: './restaurant-index.component.html',
  styleUrls: ['./restaurant-index.component.css']
})
export class RestaurantIndexComponent implements OnInit {

  public restaurant: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {

  }

  public ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: value => this.restaurant = value
    })
  }

  public createRestaurant(restaurant: RestaurantFormContent): void {
    this.restaurantService.createRestaurant(restaurant.nom, restaurant.adresse ).subscribe({
      next: value => this.restaurant.push(value)
    })
  }

}
