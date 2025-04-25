import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {TableModule} from 'primeng/table';
import { NgClass } from '@angular/common';
import { Order } from '../../models/order.model';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [TableModule, NgClass],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrdersService],
})
export class OrdersComponent implements OnInit {
  ordersSrv = inject(OrdersService);
  ordersList = signal<Order[]>([]);
  ngOnInit(): void {
    this.ordersSrv.orders$.subscribe((orders: Order[]) => {
      this.ordersList.set(orders);
    })
  }
  

}
