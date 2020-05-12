import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { RoomsPageComponent } from './rooms-page.component';
import { RoomsPageViewComponent } from './page-view/rooms-page-view.component';

describe('RoomsPageComponent', () => {
   let component: RoomsPageComponent;
   let fixture: ComponentFixture<RoomsPageComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            RoomsPageComponent,
            RoomsPageViewComponent
         ],
         imports: [IonicModule, ExploreContainerComponentModule]
      }).compileComponents();

      fixture = TestBed.createComponent(RoomsPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
