import { OrdersService } from './../../services/orders.service';
import { Order } from 'src/app/model/order.model';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  private orderSub: Subscription;
  count: number = 0;
  constructor(private orderService: OrdersService) { }
  deliveredOrders : any;
  ngOnInit(): void {
    this.orderService.getPickupOrders().subscribe(data => {
      this.deliveredOrders = data;
      console.log(data);
    })
  }
 
    

}
