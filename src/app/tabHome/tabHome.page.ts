import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabHome',
  templateUrl: 'tabHome.page.html',
  styleUrls: ['tabHome.page.scss']
})
export class TabHomePage implements OnInit{

  problemas: any = [];

  constructor(private storage: Storage) {}

  ionViewDidEnter(){
    this.storage.get('problemas').then((val) => {
      this.problemas = val;
    });
  }

  ngOnInit() {
    
  }
}