import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './main-navigation-routing.module';

import { MainNavigationComponent } from './main-navigation.component';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      TabsPageRoutingModule
   ],
   declarations: [MainNavigationComponent]
})
export class MainNavigationModule {
}
