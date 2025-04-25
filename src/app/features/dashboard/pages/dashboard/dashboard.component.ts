import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashCardComponent } from '../../components/dash-card/dash-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { DashService } from '../../services/dash.service';
import { DashboardCard } from '../../models/dashboard-card.model';
import { DashboardChartComponent } from '../../components/dash-chart/dashboard-chart.component';
import { VisitsChartComponent } from '../../components/visits-chart/visits-chart.component';
import { OrdersComponent } from '../../components/orders/orders.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashCardComponent, HttpClientModule,DashboardChartComponent,VisitsChartComponent,OrdersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashService],
})
export class DashboardComponent {
  dashboardSrv = inject(DashService);
  dashboardCards = toSignal<DashboardCard[]>(this.dashboardSrv.getDashItems());
}
