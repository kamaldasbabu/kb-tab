import { Restaurant } from './../model/restaurant.model';
import { RestaurantService } from './../services/restaurant.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-allrestaurants',
  templateUrl: './allrestaurants.component.html',
  styleUrls: ['./allrestaurants.component.css']
})
export class AllrestaurantsComponent implements OnInit, OnDestroy {

  restaurant: Restaurant [] = []
  constructor(private restaurantService: RestaurantService) { }
  
    // {id: 'r1', name: 'KFC', desc: 'Fresh foood'},
    // {id: 'r2', name: 'FOOD PANDA', desc: 'Just Eat it'},
    // {id: 'r3', name: 'ADDA', desc: 'Feeling hunger'},
    // {id: 'r4', name: 'PETUK', desc: 'best Biryani'},
    // {id: 'r5', name: 'CHIF & BEST', desc: 'Chinis Special'},
    // {id: 'r6', name: 'CANTEEN', desc: 'food fooddy'},
    // {id: 'r7', name: '2ND WIFE', desc: 'Fresh foood'},
    
  

  private resSub: Subscription;

  ngOnInit(): void {
    this.restaurantService.getRestaurants();
    this.resSub = this.restaurantService.getResUpdateListener()
      .subscribe((res: Restaurant[])=> {
        this.restaurant = res;
        console.log(res);
      })
  }
  ngOnDestroy() {
    this.resSub.unsubscribe();
  }
}
