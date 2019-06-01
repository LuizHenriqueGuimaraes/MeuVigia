import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabPerfil', loadChildren: './tabPerfil/tabPerfil.module#TabPerfilPageModule' },
  { path: 'transferirMoedas', loadChildren: './transferirMoedas/transferirMoedas.module#TransferirMoedasPageModule' },
  { path: 'resolverProblema', loadChildren: './resolverProblema/resolverProblema.module#ResolverProblemaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
