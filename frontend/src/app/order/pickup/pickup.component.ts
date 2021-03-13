import { OrdersService } from './../../services/orders.service';
import { Order } from 'src/app/model/order.model';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit, OnDestroy {

  count: number = 0;
  constructor(private orderService: OrdersService) { }
  pickupOrders : any;
  ngOnInit(): void {
    this.orderService.getPickupOrders().subscribe(data=> {
      this.pickupOrders = data;
      console.log(data);
    })
  }
  ngOnDestroy(){
    
  }

}
