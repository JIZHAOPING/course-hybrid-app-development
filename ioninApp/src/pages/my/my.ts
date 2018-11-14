import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CPage } from '../c/c';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  isActive=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  isClick(i){
    this.isActive=i;
  }
  gosub(){
    this.navCtrl.push(CPage,{id:1});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
