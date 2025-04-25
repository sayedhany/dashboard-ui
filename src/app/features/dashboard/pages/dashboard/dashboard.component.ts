import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashCardComponent } from '../../components/dash-card/dash-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { DashService } from '../../services/dash.service';
import { DashboardCard } from '../../../models/dashboard-card.model';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashCardComponent, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashService],
})
export class DashboardComponent {
  dashboardSrv = inject(DashService);
  dashboardCards = toSignal<DashboardCard[]>(this.dashboardSrv.getDashItems());
}
