import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  userData: any = {};

  constructor(private storage: Storage) {
    this.userData = {};

    this.storage.get('usuario').then((val) => {
      this.userData = val;
    });
  }

}
