import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders$: Observable<Order[]> = new Observable<Order[]>();

  constructor(private _http:HttpClient) {
    this.getOrders();
   }
  getOrders() {
    this.orders$ = this._http.get<Order[]>('http://localhost:3100/orders-list')
  }
  get ordersList$():Observable<Order[]>{
    return this.orders$;
  }
}
