import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabPerfil',
  templateUrl: './tabPerfil.page.html',
  styleUrls: ['./tabPerfil.page.scss'],
})
export class TabPerfilPage implements OnInit {

  userData: any = {};

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('usuario').then((val) => {
      this.userData = val;
    });
  }

}
