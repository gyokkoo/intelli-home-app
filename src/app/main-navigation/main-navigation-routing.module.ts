import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation.component';

const routes: Routes = [
   {
      path: 'tabs',
      component: MainNavigationComponent,
      children: [
         {
            path: 'home',
            loadChildren: () => import('../pages/home-page/home-page.module').then(m => m.HomePageModule)
         },
         {
            path: 'rooms',
            loadChildren: () => import('../pages/rooms-page/rooms-page.module').then(m => m.RoomsPageModule)
         },
         {
            path: 'analytics',
            loadChildren: () => import('../pages/analytics-page/analytics-page.module').then(m => m.AnalyticsPageModule)
         },
         {
            path: 'settings',
            loadChildren: () => import('../pages/settings-page/settings-page.module').then(m => m.SettingsPageModule)
         },
         {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full'
         }
      ]
   },
   {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class MainNavigationRoutingModule {
}
