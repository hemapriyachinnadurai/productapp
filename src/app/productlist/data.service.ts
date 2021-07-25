import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public subject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  // public share = this.product.asObservable(); 

constructor() { }

 getProduct(data?) {
 return this.subject.next(data);
}
}
