import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabHome',
        children: [
          {
            path: '',
            loadChildren: '../tabHome/tabHome.module#TabHomePageModule'
          }
        ]
      },
      {
        path: 'tabEnviar',
        children: [
          {
            path: '',
            loadChildren: '../tabEnviar/tabEnviar.module#TabEnviarPageModule'
          }
        ]
      },
      {
        path: 'tabMensagem',
        children: [
          {
            path: '',
            loadChildren: '../tabMensagem/tabMensagem.module#TabMensagemPageModule'
          }
        ]
      },
      {
        path: 'tabPerfil',
        children: [
          {
            path: '',
            loadChildren: '../tabPerfil/tabPerfil.module#TabPerfilPageModule'
          }
        ]
      },
      {
        path: 'tabs',
        redirectTo: '/tabs/tabHome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tabs',
    redirectTo: '/tabs/tabHome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
