import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomCardComponent } from './room-card.component';

describe('RoomCardComponent', () => {
   let component: RoomCardComponent;
   let fixture: ComponentFixture<RoomCardComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RoomCardComponent],
         imports: [IonicModule]
      }).compileComponents();

      fixture = TestBed.createComponent(RoomCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
