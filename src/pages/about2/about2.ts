import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the About2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about2',
  templateUrl: 'about2.html',
})
export class About2Page {
id:any;
name:any;
a:string;
k=[1,2];
n:any=new Date()
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.id=this.navParams.data.id
   this.id = navParams.get('id');
    this.name = navParams.get('name');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About2Page');
  }

}
