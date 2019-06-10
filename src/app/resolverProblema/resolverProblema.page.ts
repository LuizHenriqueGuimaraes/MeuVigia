import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-resolverProblema',
  templateUrl: './resolverProblema.page.html',
  styleUrls: ['./resolverProblema.page.scss'],
})
export class ResolverProblemaPage implements OnInit {

  problema: any = {};

  constructor(private storage: Storage, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.problema = this.router.getCurrentNavigation().extras.state.problema;
      }
    });
   }

  ngOnInit() {

  }

  resolverProblema(){
    this.storage.get('problemas').then((val) => {
      var newVal = val.filter(item => item.id != this.problema.id);
      this.storage.set('problemas', newVal).then((val) => {
        this.router.navigate(['/tabs/tabHome']);
      });
    });
  }
}
