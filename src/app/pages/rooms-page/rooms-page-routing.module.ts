import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsPageComponent } from './rooms-page.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsPageRoutingModule {}
