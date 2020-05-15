import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { UsageTrendsChartComponent } from './usage-trends-chart.component';

@Component({
   selector: 'apx-chart',
   template: ``,
})
export class ApexCharMockComponent {
   @Input() series: any;
   @Input() chart: any;
   @Input() xaxis: any;
   @Input() stroke: any;
   @Input() tooltip: any;
   @Input() markers: any;
   @Input() dataLabels: any;
   @Input() labels: any;
   @Input() grid: any;
   @Input() yaxis: any;
   @Input() title: any;
}

describe('UsageTrendsChartComponent', () => {
   let component: UsageTrendsChartComponent;
   let fixture: ComponentFixture<UsageTrendsChartComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            UsageTrendsChartComponent,
            ApexCharMockComponent,
         ],
         imports: [IonicModule]
      }).compileComponents();

      fixture = TestBed.createComponent(UsageTrendsChartComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have chart options', () => {
      expect(component.chartOptions.series).toBeDefined();
      expect(component.chartOptions.chart).toBeDefined();
      expect(component.chartOptions.xaxis).toBeDefined();
      expect(component.chartOptions.stroke).toBeDefined();
      expect(component.chartOptions.dataLabels).toBeDefined();
      expect(component.chartOptions.grid).toBeDefined();
   });
});
