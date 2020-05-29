import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomsPageComponent } from './rooms-page.component';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { RoomsPageRoutingModule } from './rooms-page-routing.module';
import { RoomsPageViewComponent } from './page-view/rooms-page-view.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomsDataService } from './rooms-data.service';
import { EditRoomPreferencesComponent } from './edit-room-preferences/edit-room-preferences.component';
import { MaterialModule } from '../../material.module';

@NgModule({
   imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      MaterialModule,
      ExploreContainerComponentModule,
      RoomsPageRoutingModule
   ],
   providers: [
      RoomsDataService,
   ],
   declarations: [
      RoomsPageComponent,
      RoomsPageViewComponent,
      RoomCardComponent,
      EditRoomPreferencesComponent,
   ],
   entryComponents: [
      RoomCardComponent,
      EditRoomPreferencesComponent,
   ]
})
export class RoomsPageModule {
}
