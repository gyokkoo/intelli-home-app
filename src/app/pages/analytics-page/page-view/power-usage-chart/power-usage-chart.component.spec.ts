import { Component, Input, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { PowerUsageChartComponent } from './power-usage-chart.component';

@Component({
   selector: 'apx-chart',
   template: ``,
})
export class ApexCharMockComponent {
   @Input() series: any;
   @Input() chart: any;
   @Input() labels: any;
   @Input() responsive: any;
}

describe('PowerUsageChartComponent', () => {
   let component: PowerUsageChartComponent;
   let fixture: ComponentFixture<PowerUsageChartComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PowerUsageChartComponent, ApexCharMockComponent],
         imports: [
            IonicModule,
         ]
      }).compileComponents();

      fixture = TestBed.createComponent(PowerUsageChartComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have chart options', () => {
      expect(component.chartOptions.series).toBeDefined();
      expect(component.chartOptions.chart).toBeDefined();
      expect(component.chartOptions.labels).toBeDefined();
      expect(component.chartOptions.responsive).toBeDefined();
   });
});
