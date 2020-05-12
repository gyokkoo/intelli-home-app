import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { SettingsPageComponent } from './settings-page.component';
import { SettingsPageViewComponent } from './page-view/settings-page-view.component';
import { MaterialModule } from '../../material.module';

describe('SettingsPageComponent', () => {
   let component: SettingsPageComponent;
   let fixture: ComponentFixture<SettingsPageComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            SettingsPageComponent,
            SettingsPageViewComponent,
         ],
         imports: [
            IonicModule,
            MaterialModule,
         ]
      }).compileComponents();

      fixture = TestBed.createComponent(SettingsPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
