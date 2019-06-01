import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData: any = {};

  constructor(private storage: Storage, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.userData = {};

    this.storage.get('usuario').then((val) => {
      if(val){
        this.redirect();
      }
    });
  }

  async login(){
    if (this.userData.usuario == "admin" && this.userData.senha == "admin"){
      this.userData.moedas = 100;
      this.storage.set('usuario', this.userData).then((val) => {
        this.userData = {};
        this.redirect();
      });
    }
    else{
      this.storage.get('usuario').then((val) => {
        if(val){
          this.redirect();
        }
        else{
          this.toastErro();
        }
      });
    }
  }

  async toastErro(){
    const toast = await this.toastController.create({
      message: 'Usuário e/ou senha inválidos!',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  redirect(){
    this.router.navigate(['/tabs/tabHome']);
  }
}
