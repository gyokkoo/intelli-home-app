import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsPageViewComponent } from './settings-page-view.component';
import { MaterialModule } from '../../../material.module';

describe('SettingsPageViewComponent', () => {
   let component: SettingsPageViewComponent;
   let fixture: ComponentFixture<SettingsPageViewComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            SettingsPageViewComponent,
         ],
         imports: [
            IonicModule,
            MaterialModule,
         ]
      }).compileComponents();

      fixture = TestBed.createComponent(SettingsPageViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
