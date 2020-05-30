import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: '',
      loadChildren: () => import('./main-navigation/main-navigation.module').then(m => m.MainNavigationModule)
   }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes, {
         preloadingStrategy: PreloadAllModules,
         useHash: true
      })
   ],
   exports: [RouterModule]
})
export class AppRoutingModule {
}
