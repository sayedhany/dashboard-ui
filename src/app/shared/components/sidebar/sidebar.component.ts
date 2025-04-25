import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlicePipe } from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import { SidebarItemsService } from '../../services/sidebarItems.service';
import { SidebarItem } from '../../models/sidebarItem.model';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, InlineSVGModule, HttpClientModule, SlicePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[SidebarItemsService]
})
export class SidebarComponent {
  sidebarOpened = input()
  public router = inject(Router);
  sidebarItemsSrv = inject(SidebarItemsService)
  sidebarItems = toSignal<SidebarItem[]>(this.sidebarItemsSrv.getSidebarItems());
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
