import { Subject } from 'rxjs';
import { Order } from './../model/order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private order:any;
  private updateOrder = new Subject<Order[]>();
  constructor(private http: HttpClient) { }

  getOrders(){
    this.http.get<{orders: any}>('http://localhost:3000/order/allorders')
      .subscribe((data) => {
        this.order = data;
        console.log(data);
        this.updateOrder.next([...this.order]);
      })
  }

  getCancelOrders(){
     return this.http.get<{orders: any}>('http://localhost:3000/order/cancel');

  }
  getDeliveredOrders(){
    return this.http.get<{orders: any}>('http://localhost:3000/order/delivered');
      
  }
  getPickupOrders(){
    return this.http.get<{orders: any}>('http://localhost:3000/order/pickup')
     
  }
  
  getOrderUpdateListener(){
    return this.updateOrder.asObservable();
  }

}
