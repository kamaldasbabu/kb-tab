
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private routerInfo: BehaviorSubject<boolean>

  constructor(private http: HttpClient) { 
    this.routerInfo = new BehaviorSubject<boolean>(false);
  }
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  register(body: any) {
    return this.http.post(environment.apiBaseUrl+'/add', body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
  public myName;
  login(body: any){
    this.http.post<{token: string, name: string}>(environment.apiBaseUrl+'/login', body, {
      observe:'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
  }).subscribe(data => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('name', data.name);
    this.uname.next(data.name);
    this.myName = data.name;
    console.log(this.myName);

    this.isAuth.next(true);
  })
  }


  getUserPayload(){
    var token = localStorage.getItem('token');
    if(token){
      var userPayload = atob(token.split(".")[1]);
      return JSON.parse(userPayload);
    }else {
      return null
    }
  }

  isLogin(){
    var userPayloadVerify = this.getUserPayload();
    if(userPayloadVerify){
      this.isAuth.next(true);
      this.uname.next(this.myName);
      return true;
    }
    return false;
  }

  logout(){
    this.deleteToken();
    this.uname.next('');
    this.isAuth.next(false);
  }

  deleteToken(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  private uname = new Subject();



  getUserName():Observable<any> {
    return this.uname.asObservable();
  }


  private isAuth = new Subject<boolean>();

  isAuthValid(){
    console.log(this.isAuth.asObservable());
    return this.isAuth.asObservable();
  }



  
   getValue(): Observable<boolean> {
    return this.routerInfo.asObservable();
   }
   setValue(newValue): void {
      this.routerInfo.next(newValue);
   }
}
