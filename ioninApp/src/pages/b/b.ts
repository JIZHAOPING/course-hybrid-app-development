import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { APage } from '../a/a';

@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gosub(){
    this.navCtrl.push(APage,{id:1});
  }
  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
  }
}
