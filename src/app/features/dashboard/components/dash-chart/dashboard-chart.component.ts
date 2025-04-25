import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-dashboard-chart',
  standalone: true,
  imports: [BaseChartDirective, DropdownModule],
  templateUrl: './dashboard-chart.component.html',
  styleUrl: './dashboard-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCharts(withDefaultRegisterables())],
})
export class DashboardChartComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [10, 20, 15, 12, 25, 30, 18, 22, 28, 35, 40, 45],
        label: 'B2B Sales',
        fill: true,
        tension: 0.4,
        borderColor: '#34D399', // Greenish color
        backgroundColor: '#fff', // Light green background
        pointRadius: 0, // No points
      },
      {
        data: [8, 15, 10, 18, 20, 25, 22, 30, 35, 38, 42, 50],
        label: 'B2C Sales',
        fill: true,
        tension: 0.4,
        borderColor: '#60A5FA', // Blue color
        backgroundColor: '#E0F2FE', // Light blue background
        pointRadius: 0, // No points
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
          color: '#6B7280', // Gray text
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: '#6B7280', // Gray text
        },
        grid: {
          display: false,
        },
      },
    },
  };
}
