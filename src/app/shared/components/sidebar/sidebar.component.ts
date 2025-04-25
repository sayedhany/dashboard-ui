import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlicePipe } from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import { SidebarItemsService } from '../../services/sidebarItems.service';
import { SidebarItem } from '../../models/sidebarItem.model';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, InlineSVGModule, HttpClientModule, SlicePipe, RouterModule, TooltipModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent  {
  sidebarOpened = input()
  public router = inject(Router);
  sidebarItemsSrv = inject(SidebarItemsService)
  sidebarItems = toSignal<SidebarItem[]>(this.sidebarItemsSrv.sidebarItems$);
  isMediumScreen = signal<boolean>(this.checkIfMediumScreen());
  constructor(){
    fromEvent(window, 'resize').subscribe(() => {
      this.isMediumScreen.set(this.checkIfMediumScreen());
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  private checkIfMediumScreen(): boolean {
    return window.innerWidth > 768 && window.innerWidth < 990;
  }
}
