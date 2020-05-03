import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AnalyticsPageRoutingModule } from './analytics-page-routing.module';
import { AnalyticsPageViewComponent } from './page-view/analytics-page-view.component';
import { AnalyticsPageComponent } from './analytics-page.component';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      AnalyticsPageRoutingModule,
   ],
   declarations: [
      AnalyticsPageComponent,
      AnalyticsPageViewComponent,
   ]
})
export class AnalyticsPageModule {
}
