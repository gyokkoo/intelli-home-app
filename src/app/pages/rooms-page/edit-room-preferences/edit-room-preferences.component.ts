import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomCardItem, RoomsDataService } from '../rooms-data.service';

const idParam = 'id';

@Component({
   selector: 'app-edit-room-preferences',
   templateUrl: 'edit-room-preferences.component.html',
   styleUrls: ['edit-room-preferences.component.scss'],
})
export class EditRoomPreferencesComponent implements OnInit {

   private routeSub: Subscription;

   room: RoomCardItem;

   constructor(
         private route: ActivatedRoute,
         private router: Router,
         private roomsDataService: RoomsDataService) {
   }

   ngOnInit(): void {
      this.routeSub = this.route.params.subscribe(params => {
         const roomId = params[idParam];
         this.roomsDataService.getRoomById(roomId).subscribe(room => {
            this.room = room;
         });
      });
   }

   goBack(): void {
      this.roomsDataService.updateRoom(this.room.id, this.room);
      this.router.navigate(['../../'], { relativeTo: this.route });
   }

   formatLabel(value: number): string {
      // Modify visible label if needed. e.g. value + " c";
      return value.toString();
   }
}
