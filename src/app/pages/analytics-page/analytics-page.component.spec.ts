import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AnalyticsPageComponent } from './analytics-page.component';

describe('Tab3Page', () => {
  let component: AnalyticsPageComponent;
  let fixture: ComponentFixture<AnalyticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsPageComponent],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
