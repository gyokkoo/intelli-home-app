import { Component, OnInit } from '@angular/core';
import { RoomCardItem, RoomsDataService } from '../rooms-data.service';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-rooms-page',
   templateUrl: 'rooms-page-view.component.html',
   styleUrls: ['rooms-page-view.component.scss'],
})
export class RoomsPageViewComponent implements OnInit {

   roomsData$: Observable<RoomCardItem[]>;

   constructor(private roomsDataService: RoomsDataService) {
   }

   ngOnInit(): void {
      this.roomsData$ = this.roomsDataService.getRoomsData();
   }
}
