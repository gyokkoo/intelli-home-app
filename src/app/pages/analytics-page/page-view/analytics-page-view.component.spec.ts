import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AnalyticsPageViewComponent } from './analytics-page-view.component';

@Component({
   selector: 'app-power-usage-chart',
   template: '',
})
export class PowerUsageChartMockComponent {
}

describe('AnalyticsPageComponent', () => {
   let component: AnalyticsPageViewComponent;
   let fixture: ComponentFixture<AnalyticsPageViewComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            AnalyticsPageViewComponent,
            PowerUsageChartMockComponent
         ],
         imports: [IonicModule]
      }).compileComponents();

      fixture = TestBed.createComponent(AnalyticsPageViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have electricity info', () => {
      expect(component.totalMoney).toBeDefined();
      expect(component.totalElectricity).toBeDefined();
   });
});
