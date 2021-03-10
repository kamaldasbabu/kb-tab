import { Subscription } from 'rxjs';
import { OrdersService } from './../../services/orders.service';
import { Order } from './../../model/order.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  private orderSub: Subscription;
  constructor(private orderService: OrdersService) { }
  // cancelOrders : Order[] = [];
  cancelOrders : any;
  ngOnInit(): void {
    this.orderService.getCancelOrders().subscribe(data=> {
        this.cancelOrders = data;
        console.log("cancelorder"+this.cancelOrders);
      }
    )
  }
  ngOnDestroy(){
    this.orderSub.unsubscribe();
  }

}
