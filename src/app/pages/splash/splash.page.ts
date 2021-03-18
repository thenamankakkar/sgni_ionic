import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public route : Router,
              private register : LoginService) {
    setTimeout(()=>{
      //this.route.navigateByUrl('login',{replaceUrl:true})

      this.register.get("sid");
    },1000)
  }

  ngOnInit() {
    //this.route.navigateByUrl('login',{replaceUrl:true})
  }

}
