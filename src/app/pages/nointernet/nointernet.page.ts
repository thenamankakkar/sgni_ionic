import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {NavController} from '@ionic/angular';

const {Network, Toast} = Plugins;


@Component({
  selector: 'app-nointernet',
  templateUrl: './nointernet.page.html',
  styleUrls: ['./nointernet.page.scss'],
})
export class NointernetPage implements OnInit {

  constructor( private navCtrl: NavController,) {

    let ref = this;
    Network.addListener('networkStatusChange', function(val) {

      if (val.connected) {

        ref.navCtrl.navigateRoot('/home', {replaceUrl: true});
      } else {
        ref.navCtrl.navigateRoot('/nointernet', {replaceUrl: true});
      }
    });
  }

  ngOnInit() {
  }

}
