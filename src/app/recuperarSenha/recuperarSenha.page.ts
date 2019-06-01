import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarSenha',
  templateUrl: './recuperarSenha.page.html',
  styleUrls: ['./recuperarSenha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  userData: any = {};

  constructor(private storage: Storage, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.userData = {};
  }

  alterarSenha(){
    this.storage.get('usuario').then((val) => {
      if(val && val.email && val.email == this.userData.email){
        this.redirect();
      }
      else{
        this.toastErro();
      }
    });
  }

  async toastErro(){
    const toast = await this.toastController.create({
      message: 'Email inválido!',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  redirect(){
    this.router.navigate(['/tabs/tabHome']);
  }
}
