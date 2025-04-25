import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { SidebarItem } from '../models/sidebarItem.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarItemsService {

  constructor(private _http: HttpClient) {}

  getSidebarItems():Observable<SidebarItem[]>  {
    return this._http.get<SidebarItem[]>('http://localhost:3100/menuItems').pipe(shareReplay())
  }


}