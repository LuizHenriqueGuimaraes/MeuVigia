import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transferirMoedas',
  templateUrl: './transferirMoedas.page.html',
  styleUrls: ['./transferirMoedas.page.scss'],
})
export class TransferirMoedasPage implements OnInit {

  transferirMoedas: any = {};

  constructor(public alertController: AlertController, public navController: NavController) { }

  ngOnInit() {
    this.transferirMoedas = {
      quantidade: 0
    };
  }

  calcularValor(valor){
    return (valor * 0.5);
  }

  async criarAlerta(){
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'A transferência foi realizada com sucesso!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navController.pop();
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
