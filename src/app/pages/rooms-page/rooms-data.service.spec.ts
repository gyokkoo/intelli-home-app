import { TestBed } from '@angular/core/testing';

import { RoomsDataService } from './rooms-data.service';

describe('RoomsDataService', () => {
   beforeEach(() => TestBed.configureTestingModule({
      providers: [
         RoomsDataService,
      ]
   }));

   it('should be created', () => {
      const service: RoomsDataService = TestBed.inject(RoomsDataService);
      expect(service).toBeTruthy();
   });
});
