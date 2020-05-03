import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
   MatSlideToggleModule
} from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { SettingsPageComponent } from './settings-page.component';
import { SettingsPageViewComponent } from './page-view/settings-page-view.component';
import { SettingsPageRoutingModule } from './settings-page-routing.module';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      MatSlideToggleModule,
      SettingsPageRoutingModule,
      MatFormFieldModule,
      MatDividerModule,
      MatCardModule
   ],
   declarations: [
      SettingsPageComponent,
      SettingsPageViewComponent,
   ]
})
export class SettingsPageModule {
}
