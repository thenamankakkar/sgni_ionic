import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  result: any = [];

  constructor(private service:LoginService) { }

  slideOptions={slidesPerView : 3.5};

  option ={
    slidesPerView:3.5,
    centerdSlides : false,
    loop:true,
    spaceBetween:1,
    autoplay:true,
    delay:2
  };


  ngOnInit() {

    this.service.mainpagetopcourses().subscribe(data => {
      this.result = data['data'];
      console.log('top courses data', this.result);
    });
  }

}
