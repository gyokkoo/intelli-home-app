import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { HomePageComponent } from './home-page.component';
import { HomePageViewComponent } from './page-view/home-page-view.component';

describe('Tab1Page', () => {
   let component: HomePageComponent;
   let fixture: ComponentFixture<HomePageComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            HomePageComponent,
            HomePageViewComponent
         ],
         imports: [IonicModule, ExploreContainerComponentModule]
      }).compileComponents();

      fixture = TestBed.createComponent(HomePageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
