import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SettingsPageComponent } from './settings-page.component';
import { SettingsPageViewComponent } from './page-view/settings-page-view.component';
import { SettingsPageRoutingModule } from './settings-page-routing.module';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      SettingsPageRoutingModule
   ],
   declarations: [
      SettingsPageComponent,
      SettingsPageViewComponent,
   ]
})
export class SettingsPageModule {
}
