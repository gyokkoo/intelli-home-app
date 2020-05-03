import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomsPageComponent } from './rooms-page.component';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { RoomsPageRoutingModule } from './rooms-page-routing.module';
import { RoomsPageViewComponent } from './page-view/rooms-page-view.component';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      RoomsPageRoutingModule
   ],
   declarations: [
      RoomsPageComponent,
      RoomsPageViewComponent,
   ]
})
export class RoomsPageModule {
}
