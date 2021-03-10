import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private routerInfo: BehaviorSubject<boolean>
  constructor() {
    this.routerInfo = new BehaviorSubject<boolean>(false);
   }
   getValue(): Observable<boolean> {
    return this.routerInfo.asObservable();
   }
   setValue(newValue): void {
      this.routerInfo.next(newValue);
   }
}
