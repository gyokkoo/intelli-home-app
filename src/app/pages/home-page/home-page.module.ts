import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageViewComponent } from './page-view/home-page-view.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      HomePageRoutingModule
   ],
   declarations: [
      HomePageComponent,
      HomePageViewComponent,
   ]
})
export class HomePageModule {
}
