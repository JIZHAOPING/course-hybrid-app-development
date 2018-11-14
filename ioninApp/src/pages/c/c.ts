import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,  } from 'ionic-angular';
// import { BPage } from '../b/b';

/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }
  gosub(){
    this.navCtrl.push('BPage',{id:1});
  }
  // ionViewDidLoad() {
    
  //   document.querySelector('#tab-t0-2').addEventListener('click',()=>{
  //     console.log('ionViewDidLoad CPage');
  //     let contactModal = this.modalCtrl.create(AddPage);
  //     contactModal.present();
  //   },false);
    
  // }

}
