import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ServiceProvider
  ]

})
export class HomePage {

    foto : any[];

  constructor(
    public navCtrl: NavController,
    public service : ServiceProvider,
    ){
  }
  getDados(){
    this.service.getData().subscribe(
      data => this.foto = data,
      err => console.log(err)
  );
}
}
