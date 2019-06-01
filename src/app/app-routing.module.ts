import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'transferirMoedas', loadChildren: './transferirMoedas/transferirMoedas.module#TransferirMoedasPageModule' },
  { path: 'resolverProblema', loadChildren: './resolverProblema/resolverProblema.module#ResolverProblemaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'recuperarSenha', loadChildren: './recuperarSenha/recuperarSenha.module#RecuperarSenhaPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
