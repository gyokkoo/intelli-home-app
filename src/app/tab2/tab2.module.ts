import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { RoomsPageComponent } from '../pages/rooms-page/rooms-page.component';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      Tab2PageRoutingModule
   ],
   declarations: [
      Tab2Page,
      RoomsPageComponent,
   ]
})
export class Tab2PageModule {
}
