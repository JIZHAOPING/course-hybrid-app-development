import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  items=[];
  isActive=0;
  arr=['客厅','卧室','餐厅','书房','门厅'];
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }
  isClick(i){
    this.isActive=i;
  }
}
