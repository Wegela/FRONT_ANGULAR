import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";
import {ActivatedRoute, Params} from "@angular/router";



@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})

export class RestaurantDetailsComponent implements OnInit {
  public restaurant?: Restaurant;


  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {

  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params)  => {
      this.restaurantService.getRestaurantById(parseInt(params['id'])).subscribe(value => this.restaurant = value )

    })



  }


}
