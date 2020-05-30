import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsPageComponent } from './rooms-page.component';
import { EditRoomPreferencesComponent } from './edit-room-preferences/edit-room-preferences.component';

const routes: Routes = [
   {
      path: '',
      component: RoomsPageComponent,
   },
   {
      path: 'edit/:id', component: EditRoomPreferencesComponent
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RoomsPageRoutingModule {
}
