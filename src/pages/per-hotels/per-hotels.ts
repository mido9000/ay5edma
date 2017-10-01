import { PerHoteldetailsPage } from './../per-hoteldetails/per-hoteldetails';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerHotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-per-hotels',
  templateUrl: 'per-hotels.html',
})
export class PerHotelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerHotelsPage');
  }
  gohotel(){
    this.navCtrl.push(PerHoteldetailsPage);
  }
}