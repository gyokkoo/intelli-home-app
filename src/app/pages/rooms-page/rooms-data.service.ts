import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface RoomCardItem {
   headerImage: string;
   title: string;
   temperature: number;
   humidity: number;
   electricity: number;
   lampPower: number;
}

const livingRoom: RoomCardItem = {
   headerImage: './assets/app-icons/television-icon.svg',
   title: 'Living room',
   temperature: 21,
   humidity: 68,
   electricity: 412,
   lampPower: 144,
};

const bathroom: RoomCardItem = {
   headerImage: './assets/app-icons/bathroom-icon.svg',
   title: 'Bathroom',
   temperature: 27,
   humidity: 87,
   electricity: 43,
   lampPower: 20,
};

const bedroom: RoomCardItem = {
   headerImage: './assets/app-icons/bedroom-icon.svg',
   title: 'Bedroom',
   temperature: 23,
   humidity: 62,
   electricity: 89,
   lampPower: 0,
};

const bedroomGuests: RoomCardItem = {
   headerImage: './assets/app-icons/bedroom-icon.svg',
   title: 'Bedroom (Guests)',
   temperature: 22,
   humidity: 67,
   electricity: 9,
   lampPower: 0,
};

const kitchen: RoomCardItem = {
   headerImage: './assets/app-icons/kitchen-icon.svg',
   title: 'Kitchen',
   temperature: 22,
   humidity: 69,
   electricity: 21,
   lampPower: 134,
};


@Injectable()
export class RoomsDataService {

   constructor() {
   }

   getRoomsData(): Observable<RoomCardItem[]> {
      return of([
         { ...livingRoom },
         { ...bathroom },
         { ...bedroom },
         { ...bedroomGuests },
         { ...kitchen },
      ]);
   }
}
