import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.get('problemas').then((val) => {
        if(!val){
          this.storage.set('problemas', data);
        }
      });
    });
  }
}

const data = [
  {
    id: '1',
    endereco: "Av: Dom José Gaspar, 500 Coração Eucarístico - Belo Horizonte - MG",
    numAlertas: '573',
    thumbnail: 'https://liberal.com.br/wp-content/uploads/2017/03/buraco-rua-cinco__Isabella-Holouka-O-Liberal.jpg',
    descricao: 'Tem um buraco enorme aqui perto da PUC Coração eucarístico, está dificultando a passagem de veículos, duas pessoas já sofreram acidentes nesta rua.'
  },
  {
    id: '2',
    endereco: " Avenida Juscelino Kubitschek, 381 - Betim",
    numAlertas: '90',
    thumbnail: 'https://static.correiodoestado.com.br/upload/dn_noticia/2018/09/onibus-quebrado-bruno-henrique1.jpg',
    descricao: 'Tem um ônibus quebrado aqui na avenida a mais de 2 dias, o trânsito está ficando cada vez mais congestionado, está quase impossível de ter passagem de veículos neste local.'
  },
  {
    id: '3',
    endereco: "Av João César de Oliveira, 2477 - Eldorado - Contagem - MG",
    numAlertas: '869',
    thumbnail: 'https://s2.glbimg.com/nXAXy38JN56ISHA7q90M_Es54-A=/0x0:795x589/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/c/P/T0tmAlT5yWk6lp82Ambg/poste-morte.png',
    descricao: 'Um enorme acidente ocorreu aqui perto do colégio chromos, morreram 3 pessoas e 4 estão feridas.'
  }
];