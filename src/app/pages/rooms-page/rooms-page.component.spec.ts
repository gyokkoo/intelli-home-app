import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomsPageComponent } from './rooms-page.component';

@Component({
   selector: 'app-rooms-page',
   template: ``,
})
class RoomsPageViewMockComponent {
}

describe('RoomsPageComponent', () => {
   let component: RoomsPageComponent;
   let fixture: ComponentFixture<RoomsPageComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            RoomsPageComponent,
            RoomsPageViewMockComponent,
         ],
         imports: [IonicModule]
      }).compileComponents();

      fixture = TestBed.createComponent(RoomsPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
