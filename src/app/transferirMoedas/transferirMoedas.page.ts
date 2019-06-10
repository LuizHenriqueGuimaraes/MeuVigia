import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transferirMoedas',
  templateUrl: './transferirMoedas.page.html',
  styleUrls: ['./transferirMoedas.page.scss'],
})
export class TransferirMoedasPage implements OnInit {

  userData: any = {};
  transferirMoedas: any = {};

  constructor(private alert: AlertController, private router: Router, private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {
    this.transferirMoedas = {
      quantidade: 0
    };

    this.storage.get('usuario').then((val) => {
      this.userData = val;
    });
  }

  calcularValor(valor){
    return (valor * 0.5);
  }
  
  transferir(){
    var quantidade = this.transferirMoedas.quantidade;

    if(quantidade > this.userData.moedas){
      this.toastErro("Moedas insuficientes!");
    }
    else{
      this.userData.moedas = this.userData.moedas - quantidade;
      this.storage.set('usuario', this.userData).then((val) => {
        this.criarAlerta();
      });
    }
  }

  async criarAlerta(){
    const alert = await this.alert.create({
      header: 'Sucesso!',
      message: 'A transferência foi realizada com sucesso!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/tabs/tabPerfil']);
          }
        }
      ]
    });
  
    await alert.present();
  }

  async toastErro(mensagem){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }
}
