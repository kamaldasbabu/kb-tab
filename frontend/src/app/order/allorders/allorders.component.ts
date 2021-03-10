import { Subscription } from 'rxjs';
import { OrdersService } from './../../services/orders.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit, OnDestroy {
  private orderSub: Subscription;
  count: number = 0;
  constructor(private orderService: OrdersService) { }
  orders : Order[] = [];
  ngOnInit(): void {
    this.orderService.getOrders();
    this.orderSub = this.orderService.getOrderUpdateListener()
      .subscribe((order: Order[])=> {
        this.orders = order;
      })
  }
  ngOnDestroy(){
    this.orderSub.unsubscribe();
  }
}
