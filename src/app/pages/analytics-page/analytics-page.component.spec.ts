import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { AnalyticsPageComponent } from './analytics-page.component';

@Component({
   selector: 'app-analytics-page',
   template: '',
})
export class AnalyticsPageViewMockComponent {
}

describe('AnalyticsPageComponent', () => {
   let component: AnalyticsPageComponent;
   let fixture: ComponentFixture<AnalyticsPageComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            AnalyticsPageComponent,
            AnalyticsPageViewMockComponent,
         ],
         imports: [
            IonicModule,
            ExploreContainerComponentModule]
      }).compileComponents();

      fixture = TestBed.createComponent(AnalyticsPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have correct title', () => {
      expect(component.pageTitle).toEqual('Analytics');
   });
});
