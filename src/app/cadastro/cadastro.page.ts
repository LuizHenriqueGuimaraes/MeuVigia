import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  userData: any = {};

  constructor(private storage: Storage, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.userData = {};
  }

  cadastrar(){
    if(this.userData.senha == this.userData.confirmarSenha){
      this.userData.moedas = 100;
      this.storage.set('usuario', this.userData).then((val) => {
        this.userData = {};
        this.redirect();
      });
    }
    else{
      this.toastErro("As senhas não conferem!");
    }
  }

  async toastErro(mensagem){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  redirect(){
    this.router.navigate(['/tabs/tabHome']);
  }
}
