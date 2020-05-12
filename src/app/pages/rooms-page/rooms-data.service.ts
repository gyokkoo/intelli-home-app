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
   headerImage: '../../../../assets/app-icons/television-icon.svg',
   title: 'Living room',
   temperature: 21,
   humidity: 68,
   electricity: 412,
   lampPower: 144,
};

@Injectable()
export class RoomsDataService {

   constructor() {
   }

   getRoomsData(): Observable<RoomCardItem[]> {
      return of([livingRoom]);
   }
}
