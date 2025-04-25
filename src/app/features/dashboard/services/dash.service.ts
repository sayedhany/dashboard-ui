import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardCard } from '../../models/dashboard-card.model';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private _http: HttpClient) { }
  getDashItems() {
    return this._http.get<DashboardCard[]>('http://localhost:3100/dashboardCards')
  }

}
