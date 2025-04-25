import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SIDEBAR_ITEMS } from '../../../core/menu-item';
import { Router, RouterLink } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { SlicePipe } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, InlineSVGModule, HttpClientModule, SlicePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  sidebarItems = signal(SIDEBAR_ITEMS);
  public router = inject(Router);
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
