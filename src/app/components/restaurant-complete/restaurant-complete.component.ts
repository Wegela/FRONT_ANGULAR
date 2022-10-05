import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../dto/restaurant.dto";
import {RestaurantFormContent} from "../restaurant-form/restaurant-form.component";
import {RestaurantDetailsComponent} from "../../pages/restaurant-details/restaurant-details.component";


@Component({
  selector: 'app-restaurant-complete',
  templateUrl: './restaurant-complete.component.html',
  styleUrls: ['./restaurant-complete.component.css']
})
export class RestaurantCompleteComponent implements OnInit {
  @Input()
  public restaurant?: Restaurant;
  constructor() { }

  ngOnInit(): void {

  }

}
