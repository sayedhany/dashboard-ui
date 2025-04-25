import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { SidebarItem } from '../models/sidebarItem.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarItemsService {
  sidebarItems!: Observable<SidebarItem[]>;
  constructor(private _http: HttpClient) {
    this.getSidebarItems();
  }
  get sidebarItems$(): Observable<SidebarItem[]> {
    return this.sidebarItems;
  }
  getSidebarItems()  {
    this.sidebarItems = this._http.get<SidebarItem[]>('http://localhost:3100/menuItems').pipe(shareReplay())
  }


}