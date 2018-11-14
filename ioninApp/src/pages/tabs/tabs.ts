import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddPage} from '../add/add';
import { ModalController } from 'ionic-angular';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MyPage;
  // tab4Root = 'BPage';
  // tab5Root = 'CPage';

  ionViewDidLoad() {
    
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      console.log('ionViewDidLoad CPage');
      let contactModal = this.modalCtrl.create(AddPage);
      contactModal.present();
    },false);
    
  }
  constructor(public modalCtrl: ModalController) {

  }
}
