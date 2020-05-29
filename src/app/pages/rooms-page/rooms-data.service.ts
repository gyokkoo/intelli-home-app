import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface RoomCardItem {
   id: string;
   headerImage: string;
   title: string;
   temperature: number;
   humidity: number;
   electricity: number;
   lampPower: number;
}

const livingRoom: RoomCardItem = {
   id: 'living-room',
   headerImage: 'tv',
   title: 'Living room',
   temperature: 21,
   humidity: 68,
   electricity: 412,
   lampPower: 144,
};

const bathroom: RoomCardItem = {
   id: 'bathroom',
   headerImage: 'bathtub',
   title: 'Bathroom',
   temperature: 27,
   humidity: 87,
   electricity: 43,
   lampPower: 20,
};

const bedroom: RoomCardItem = {
   id: 'bedroom',
   headerImage: 'king_bed',
   title: 'Bedroom',
   temperature: 23,
   humidity: 62,
   electricity: 89,
   lampPower: 0,
};

const bedroomGuests: RoomCardItem = {
   id: 'bedroom-guests',
   headerImage: 'king_bed',
   title: 'Bedroom (Guests)',
   temperature: 22,
   humidity: 67,
   electricity: 9,
   lampPower: 0,
};

const kitchen: RoomCardItem = {
   id: 'kitchen',
   headerImage: 'room_service',
   title: 'Kitchen',
   temperature: 22,
   humidity: 69,
   electricity: 21,
   lampPower: 134,
};


@Injectable()
export class RoomsDataService {
   private readonly roomsState = new Map<string, RoomCardItem>();

   constructor() {
      // Initialize the state of the rooms.
      this.roomsState.set(livingRoom.id, livingRoom);
      this.roomsState.set(bathroom.id, bathroom);
      this.roomsState.set(bedroom.id, bedroom);
      this.roomsState.set(bedroomGuests.id, bedroomGuests);
      this.roomsState.set(kitchen.id, kitchen);

   }

   getRoomsData(): Observable<RoomCardItem[]> {
      return of([...this.roomsState.values()]);
   }

   getRoomById(roomId: string): Observable<RoomCardItem> {
      return of(this.roomsState.get(roomId));
   }

   updateRoom(roomId: string, room: RoomCardItem) {
      this.roomsState.set(roomId, room);
   }
}
