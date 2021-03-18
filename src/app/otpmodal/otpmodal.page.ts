import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {HttpClient} from '@angular/common/http';
import {ModalController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-otpmodal',
  templateUrl: './otpmodal.page.html',
  styleUrls: ['./otpmodal.page.scss'],
})
export class OtpmodalPage implements OnInit {

  private todo: FormGroup;
  serverData: any;

  otp;
  sid;
  scode;
  phone;
  spid;
  public mycode;

  Get_Student_ProfileId: any = [];




  constructor(private formBuilder: FormBuilder,
              private register: LoginService,
              private http: HttpClient,
              private modalController: ModalController,
              private router : Router,
              private toastController : ToastController

              ) {
    this.todo = this.formBuilder.group({
      otp: ['', Validators.required],
    });

  }



  ngOnInit() {
    console.log("otpmodel",this.otp);
    console.log("sid",this.sid);
    console.log("scode",this.scode);
    console.log("got the phone no",this.phone);



    this.register.Get_Student_ProfileId(this.sid).subscribe(data=>{
      console.log("the value of get student profile id",data);

      this.Get_Student_ProfileId = data;

      this.Get_Student_ProfileId.data.forEach(async (item) => {
        this.spid = item.spid;
        console.log("spid id is this in the game",this.spid)
      });
    });

    console.log("got the spid no",this.spid);
  }
  async logForm() {

    console.log(this.todo.value);
    this.serverData = this.todo.value;
    if (this.otp === this.serverData.otp) {
      console.log("OTP MAtched");
      this.register.set("sid", this.sid);
      this.register.set("scode", this.scode);
      this.register.set("phone", this.phone);
      this.register.set("spid", this.spid);





      this.router.navigateByUrl(`/home`, {replaceUrl: true});
      this.modalController.dismiss()
    } else if (this.otp !== this.serverData.otp) {

      console.log("otp is not matching");
      const toast = await this.toastController.create({
        message: 'Invalid OTP',
        position: 'middle',
        duration: 3000,
        color : 'danger',
        buttons: [
          {
            side: 'start',
            icon: 'skull',
            handler: () => {
              console.log('Favorite clicked');
            }
          }
        ]


      });
      toast.present();
      this.todo.reset();

    }


  }



}
