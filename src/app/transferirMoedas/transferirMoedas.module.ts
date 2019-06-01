import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransferirMoedasPage } from './transferirMoedas.page';

const routes: Routes = [
  {
    path: '',
    component: TransferirMoedasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransferirMoedasPage]
})
export class TransferirMoedasPageModule {}
