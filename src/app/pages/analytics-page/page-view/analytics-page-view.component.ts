import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-analytics-page',
   templateUrl: 'analytics-page-view.component.html',
   styleUrls: ['analytics-page-view.component.scss'],
})
export class AnalyticsPageViewComponent implements OnInit {

   totalMoney = 159.69;
   totalElectricity = 259.33;

   constructor() {
   }

   ngOnInit() {
   }
}
