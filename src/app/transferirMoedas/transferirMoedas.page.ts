import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferirMoedas',
  templateUrl: './transferirMoedas.page.html',
  styleUrls: ['./transferirMoedas.page.scss'],
})
export class TransferirMoedasPage implements OnInit {

  transferirMoedas: any = {};

  constructor(private alert: AlertController, private router: Router) { }

  ngOnInit() {
    this.transferirMoedas = {
      quantidade: 0
    };
  }

  calcularValor(valor){
    return (valor * 0.5);
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
  
  transferir(){
    var quantidade = this.transferirMoedas.quantidade;
    this.criarAlerta();
  }
}
