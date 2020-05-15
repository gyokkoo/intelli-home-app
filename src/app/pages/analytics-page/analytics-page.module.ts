import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AnalyticsPageRoutingModule } from './analytics-page-routing.module';
import { AnalyticsPageViewComponent } from './page-view/analytics-page-view.component';
import { AnalyticsPageComponent } from './analytics-page.component';
import { PowerUsageChartComponent } from './page-view/power-usage-chart/power-usage-chart.component';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      NgApexchartsModule,
      ExploreContainerComponentModule,
      AnalyticsPageRoutingModule,
   ],
   declarations: [
      AnalyticsPageComponent,
      AnalyticsPageViewComponent,
      PowerUsageChartComponent,
   ]
})
export class AnalyticsPageModule {
}
