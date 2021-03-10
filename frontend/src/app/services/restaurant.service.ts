import { Restaurant } from './../model/restaurant.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantt:any;
  // private restaurantt: Restaurant[] = [];
  constructor(private http: HttpClient) { }
  private updatedRestaurant = new Subject<Restaurant[]>();
  url = "http://localhost:3000/restaurant/allrestaurants";

  // getRestaurants(){
  //   this.http.get<{restaurants: any}>(this.url)
  //     .subscribe(resData => {
  //       this.restaurantt = resData.restaurants;
  //       this.updatedRestaurant.next([...this.restaurantt]);
  //       console.log("kk");
  //     })  
  // }
  getRestaurants(){
    this.http.get<{restaurants:any}>(this.url)
      // .pipe(map((resData) => {
      //   return resData.restaurants.map(res => {
      //     return { 

      //       resId: res.resId,
      //       resName: res.resName,
      //       resAddress: res.resAddress,
      //       id: res._id
          
      //     }
      //   })
      // }))
      .subscribe((transformRes)=> {
        this.restaurantt = transformRes;
        console.log(transformRes);
        this.updatedRestaurant.next([...this.restaurantt]);
      })
  }

  getResUpdateListener() {
    return this.updatedRestaurant.asObservable();
  }
}


