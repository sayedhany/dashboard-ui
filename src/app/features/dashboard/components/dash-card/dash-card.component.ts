import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DashboardCard } from '../../models/dashboard-card.model';

@Component({
  selector: 'app-dash-card',
  standalone: true,
  imports: [],
  templateUrl: './dash-card.component.html',
  styleUrl: './dash-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashCardComponent {
  cardItem = input<DashboardCard>()
}
