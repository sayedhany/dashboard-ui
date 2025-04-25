import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  provideCharts,
  withDefaultRegisterables,
  } from 'ng2-charts';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-visits-chart',
  standalone: true,
  imports: [ HttpClientModule,BaseChartDirective],
  templateUrl: './visits-chart.component.html',
  styleUrl: './visits-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[provideCharts(withDefaultRegisterables())]
})
export class VisitsChartComponent {
  
  public SystemName: string = "MF1";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [ 1,8,49];
 
  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: this.SystemName
      }
  ];
  // labels
  public lineChartLabels: Array<any> = ["M", "T", "W"];
  
  constructor(  ) { }

  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 60,
          min: 0,
          stepSize: 10,
          callback: function(value: number) {
            return value + " units"; // Custom label for y-axis ticks
          }
        },
        gridLines: {
          display: true,
          color: "#e0e0e0"
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5
        }
      }],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#222",
        font: {
          family: 'FontAwesome',
          size: 14
        },
      },
      deferred: false,
      legend: {
        display: true,
        position: 'top',
        labels: {
          fontColor: '#333',
          fontSize: 12
        }
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(tooltipItem: any) {
            return `Value: ${tooltipItem.yLabel}`;
          }
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutBounce'
    },
    maintainAspectRatio: false
  };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];



  public ChartType = 'bar';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }



}
