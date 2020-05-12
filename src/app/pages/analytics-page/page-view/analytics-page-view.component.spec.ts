import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnalyticsPageViewComponent } from './analytics-page-view.component';

describe('AnalyticsPageComponent', () => {
   let component: AnalyticsPageViewComponent;
   let fixture: ComponentFixture<AnalyticsPageViewComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [AnalyticsPageViewComponent],
         imports: [IonicModule]
      }).compileComponents();

      fixture = TestBed.createComponent(AnalyticsPageViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
