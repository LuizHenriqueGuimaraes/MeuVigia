import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-tabEnviar',
  templateUrl: 'tabEnviar.page.html',
  styleUrls: ['tabEnviar.page.scss']
})
export class TabEnviarPage {
  
  problema: any = {};

  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyAgF7Et3nOUw2cnWOOARpZgtVdSvnC3EM0'; /*Your API Key*/

  constructor(private storage: Storage, private router: Router, private toastController: ToastController, private geolocation: Geolocation) {
    this.problema = {};

    /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';

    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }

    document.head.appendChild(script);

    /*Get Current location*/
    this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });

    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 21,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false
    };

    setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'Minha Localização';
        this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
  }

  enviarProblema(){
    this.problema.numAlertas = 1;
    if(this.problema.descricao){
      this.storage.get('problemas').then((val) => {
        val.push(this.problema);
        console.log(val);
        this.storage.set('problemas', val).then((val) => {
          this.problema = {};
        });
      });
    }
    else{
      this.toastErro("Favor preencher uma descrição!");
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
