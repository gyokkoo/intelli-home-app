import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RoomsPageViewComponent } from './rooms-page-view.component';
import { RoomCardComponent } from '../room-card/room-card.component';
import { RoomsDataService } from '../rooms-data.service';

describe('RoomsPageComponent', () => {
   let component: RoomsPageViewComponent;
   let fixture: ComponentFixture<RoomsPageViewComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RoomsPageViewComponent, RoomCardComponent],
         providers: [RoomsDataService],
         imports: [IonicModule]
      }).compileComponents();

      fixture = TestBed.createComponent(RoomsPageViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
