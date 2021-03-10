import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }
  restaurantDetails = [
    {
      name: 'Parata zone', 
      address: { street:'ssp', dist: 'bardhaman', pin:713141},
      id: 'r1',
      foods:{
        item1: 'Biryani',
        item2:'Chicken',
        item3: 'cold drinks'
      },
      contact: 9002888618
    }
  ]
  ngOnInit(): void {
  }

}
