import { Component, OnInit, ViewChild } from '@angular/core';
import {
   ChartComponent,
   ApexAxisChartSeries,
   ApexChart,
   ApexXAxis,
   ApexDataLabels,
   ApexStroke,
   ApexMarkers,
   ApexYAxis,
   ApexGrid,
   ApexTitleSubtitle,
   ApexLegend
} from 'ng-apexcharts';

export interface ChartOptions {
   series: ApexAxisChartSeries;
   chart: ApexChart;
   xaxis: ApexXAxis;
   stroke: ApexStroke;
   dataLabels: ApexDataLabels;
   markers: ApexMarkers;
   tooltip: any; // ApexTooltip;
   yaxis: ApexYAxis;
   grid: ApexGrid;
   legend: ApexLegend;
   title: ApexTitleSubtitle;
}

@Component({
   selector: 'app-usage-trends-chart',
   templateUrl: 'usage-trends-chart.component.html',
   styleUrls: ['usage-trends-chart.component.scss'],
})
export class UsageTrendsChartComponent implements OnInit {

   @ViewChild('chart') chart: ChartComponent;
   public chartOptions: Partial<ChartOptions>;

   constructor() {
   }

   ngOnInit(): void {
      this.initializeChartOptions();
   }

   private initializeChartOptions(): void {
      this.chartOptions = {
         series: [
            {
               name: 'Kitchen',
               data: [45, 52, 86, 99]
            },
            {
               name: 'Living room',
               data: [35, 41, 74, 65]
            },
            {
               name: 'Bathroom',
               data: [87, 57, 62, 43]
            },
            {
               name: 'Bedroom',
               data: [70, 25, 34, 40]
            }
         ],
         chart: {
            height: 350,
            type: 'line'
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            width: 5,
            curve: 'straight',
            dashArray: [0, 8, 5]
         },
         legend: {
            tooltipHoverFormatter(val, opts) {
               return (
                     val +
                     ' - <strong>' +
                     opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                     '</strong>'
               );
            }
         },
         markers: {
            size: 0,
            hover: {
               sizeOffset: 6
            }
         },
         xaxis: {
            labels: {
               trim: false
            },
            categories: [
               'Dec 19',
               'Jan 20',
               'Feb 20',
               'Mart 20',
            ]
         },
         tooltip: {
            y: [
               {
                  title: {
                     formatter(val) {
                        return val + ' kWh usage';
                     }
                  }
               },
               {
                  title: {
                     formatter(val) {
                        return val + ' kWh usage';
                     }
                  }
               },
               {
                  title: {
                     formatter(val) {
                        return val + ' kWh usage';
                     }
                  }
               },
               {
                  title: {
                     formatter(val) {
                        return val + ' kWh usage';
                     }
                  }
               }
            ]
         },
         grid: {
            borderColor: '#f1f1f1'
         }
      };
   }
}
