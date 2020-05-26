import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
   ApexNonAxisChartSeries,
   ApexResponsive,
   ApexChart
} from 'ng-apexcharts';

export interface ChartOptions {
   series: ApexNonAxisChartSeries;
   chart: ApexChart;
   responsive: ApexResponsive[];
   labels: any;
}

@Component({
   selector: 'app-power-usage-chart',
   templateUrl: 'power-usage-chart.component.html',
   styleUrls: ['power-usage-chart.component.scss'],
})
export class PowerUsageChartComponent implements OnInit {

   @ViewChild('chart') chart: ChartComponent;
   public chartOptions: Partial<ChartOptions>;

   constructor() {
   }

   ngOnInit(): void {
      this.initializeChartOptions();
   }

   private initializeChartOptions(): void {
      this.chartOptions = {
         series: [69, 48.45, 20.24, 22],
         chart: {
            type: 'donut'
         },
         labels: ['Kitchen', 'Living room', 'Bathroom', 'Bedroom'],
         responsive: [
            {
               breakpoint: 480,
               options: {
                  chart: {
                     width: 350
                  },
                  legend: {
                     position: 'bottom'
                  },
                  tooltip: {
                     y: {
                        formatter: val => {
                           return '€' + val;
                        }
                     }
                  }
               }
            }
         ]
      };
   }
}
