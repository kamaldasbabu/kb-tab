import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url= 'http://localhost:3000/reg/add';
  register(body: any) {
    return this.http.post(this.url, body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
  urlLog='http://localhost:3000/reg/login';

  login(body: any){
    this.http.post<{token: string, name: string}>(this.urlLog, body, {
      observe:'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
  }).subscribe(data => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('name', data.name);
    this.uname.next(data.name);
    this.isAuth.next(true);
  })
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.uname.next('');
    this.isAuth.next(false);
  }

  urlUsername='http://localhost:3000/reg/username'
  private uname = new Subject();
  getUserName():Observable<any>{
    return this.uname.asObservable();

  }
  private isAuth = new Subject<boolean>();

  isAuthValid() {
    return this.isAuth.asObservable();
  }


}
