import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabHome',
  templateUrl: 'tabHome.page.html',
  styleUrls: ['tabHome.page.scss']
})
export class TabHomePage implements OnInit{

  userData: any = {};
  problemas: any = [];
  descending: boolean = false;
  order: number;
  column: string = 'numAlertas';

  constructor(private storage: Storage, private router: Router) {}

  ionViewDidEnter(){
    this.userData = {};

    this.recarregarProblemas();

    this.storage.get('usuario').then((val) => {
      this.userData = val;
    });
  }

  ngOnInit() {

  }

  ordenar(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  resolverProblema(problema){
    let navigationExtras: NavigationExtras = {
      state: {
        problema: problema
      }
    };
    this.router.navigate(['/resolverProblema'], navigationExtras);
  }

  recarregarProblemas(){
    this.storage.get('problemas').then((val) => {
      console.log(val);
      this.problemas = val;
    });
  }
}