import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { About2Page } from '../about2/about2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name:string;
id:number;
  constructor(public navCtrl: NavController) {

  }
  goAnOtherPage() {
    this.navCtrl.push(About2Page,{id: "123", name: "ahmed"});
  }
  functionName(){
    this.id=5+5;
  }

}

