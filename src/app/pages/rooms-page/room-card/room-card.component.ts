import { Component, Input, OnInit } from '@angular/core';
import { RoomCardItem } from '../rooms-data.service';

@Component({
   selector: 'app-room-card',
   templateUrl: 'room-card.component.html',
   styleUrls: ['room-card.component.scss'],
})
export class RoomCardComponent implements OnInit {

   @Input() roomData: RoomCardItem;

   constructor() {
   }

   ngOnInit(): void {
   }
}
