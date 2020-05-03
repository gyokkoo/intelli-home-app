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
            loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule)
         },
         {
            path: 'tab2',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
         },
         {
            path: 'tab3',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
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
export class TabsPageRoutingModule {
}
