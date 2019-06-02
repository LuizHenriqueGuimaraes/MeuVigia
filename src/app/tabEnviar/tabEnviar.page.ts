import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';

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

  constructor(private storage: Storage, private router: Router, private toastController: ToastController, 
              private geolocation: Geolocation, private camera: Camera,
              private alert: AlertController, private webview: WebView,
              private locationAccuracy: LocationAccuracy, private androidPermissions: AndroidPermissions) {
    this.problema = {};

    this.checkGPSPermission();
  }

  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          this.askToTurnOnGPS();
        } else {
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              this.askToTurnOnGPS();
            },
            error => {
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        this.createMap();
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  createMap(){
    /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';

    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }

    document.head.appendChild(script);

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
      /*Get Current location*/
      this.geolocation.getCurrentPosition().then((position) =>  {
        console.log(position);
        if(position && position.coords && position.coords.latitude && position.coords.longitude){
          this.location.lat = position.coords.latitude;
          this.location.lng = position.coords.longitude;
          this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
          /*Marker Options*/
          this.markerOptions.position = this.location;
          this.markerOptions.map = this.map;
          this.markerOptions.title = 'Minha Localização';
          this.marker = new google.maps.Marker(this.markerOptions);
        }
      }).catch((error) => {
        console.log(error);
        alert('Error getting location' + error);
      });
    }, 3000);
  }

  async selectImage() {
    const alert = await this.alert.create({
      header: 'Enviar imagem',
      message: 'Selecione como deseja enviar a imagem',
      buttons: [
        {
          text: 'Galeria',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Câmera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancelar'
        }
      ]
    });

    await alert.present();
  }

  takePicture(sourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.FILE_URI
    };
 
    this.camera.getPicture(options).then((imageData) => {
        this.problema.thumbnail = this.webview.convertFileSrc(imageData);
    }, (err) => {
      // Handle error
    });
  }

  enviarProblema(){
    this.problema.numAlertas = 1;
    if(this.problema.descricao){
      if(this.problema.thumbnail){
        this.storage.get('problemas').then((val) => {
          val.push(this.problema);
          console.log(val);
          this.storage.set('problemas', val).then((val) => {
            this.problema = {};
            this.toast("Problema cadastrado com sucesso!");
            this.redirect();
          });
        });
      }
      else{
        this.toast("Favor adicionar uma imagem!");
      }
    }
    else{
      this.toast("Favor preencher uma descrição!");
    }
  }

  async toast(mensagem){
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
