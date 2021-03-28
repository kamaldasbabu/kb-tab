import { Restaurant } from './../model/restaurant.model';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantt:any;
  private restauranttt: Restaurant[];
  constructor(private http: HttpClient) { }

  private updatedRestaurant = new Subject<Restaurant[]>();

  url = "http://localhost:3000/restaurant";
  readonly URLID ='http://localhost:3000/restaurant';
  
  getRestaurants(){
    this.http.get<{restaurants:any}>(this.url)
      .subscribe((transformRes)=> {
        this.restaurantt = transformRes;
        console.log(transformRes);
        this.updatedRestaurant.next([...this.restaurantt]);
      })
  }

  getAllRes(){
     return this.http.get<Restaurant[]>(this.URLID);
  }

  getOneRestaurant(resid: number){
    return this.http.get<Restaurant[]>(this.URLID+`/${resid}`);

  }

  addresurl = 'http://localhost:3000/restaurant/newres'

  register(body: any) {
    return this.http.post(this.addresurl, body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  deleteRest(resId: string){
    this.http.delete('http://localhost:3000/restaurant/'+resId)
      .subscribe(()=> {
        console.log("deleted Resturant");
      })
  }
  
  getResUpdateListener() {
    return this.updatedRestaurant.asObservable();
  }
}




// getRestaurants(){
  //   this.http.get<{restaurants: any}>(this.url)
  //     .subscribe(resData => {
  //       this.restaurantt = resData.restaurants;
  //       this.updatedRestaurant.next([...this.restaurantt]);
  //       console.log("kk");
  //     })  
  // }



  // getRestaurants(){
  //   this.http.get<{restaurants:any}>(this.url)
  //     .pipe(map((resData) => {
  //       return resData.restaurants.map(res => {
  //         return { 

  //           resId: res.resId,
  //           resName: res.resName,
  //           resAddress: res.resAddress,
  //           id: res._id
          
  //         }
  //       })
  //     }))
  //     .subscribe((transformRes)=> {
  //       this.restaurantt = transformRes;
  //       console.log(transformRes);
  //       this.updatedRestaurant.next([...this.restaurantt]);
  //     })
  // }