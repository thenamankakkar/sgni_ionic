import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {LoadingController, MenuController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-myprofile',
    templateUrl: './myprofile.page.html',
    styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
    private todo: FormGroup;
    batch: any;
    batchtime: any;
    data;
    sid;
    serverData: any;
    constructor(private formBuilder: FormBuilder,
                private service: LoginService,
                private loadingController: LoadingController,
                private toastController: ToastController,
                private router : Router,
                private menu: MenuController) {
        this.todo = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
            gender: ['', Validators.required]
        });
     /*   this.todo.controls['phone'].disable();*/


    }

    ngOnInit() {
        this.menu.close();
        this.service.getSid('spid').then(
            (d) => console.log("spid is this now",this.sid= d)
        );


    /*    this.service.getphone('phone').then(
            (value) => console.log("isLogged",this.data= value)
        );*/



      /*  this.service.getphone('phone');
        this.service.getSid('sid').then((value) => console.log("this is the sid",this.sid= value));*/

    }

    batchChange(batch) {
        console.log('Selectedbatch', batch);
        this.batchtime = batch;
        console.log(this.batchtime);
    }

    logForm() {
        console.log(this.sid);
        this.serverData = this.todo.value;
        console.log(this.serverData.phone);
      /*  this.service.updatephone(this.sid, this.serverData.name,this.serverData.address,this.serverData.phone,this.serverData.gender).subscribe(data => {
            console.log(data);
            this.loading();


        });*/
        this.service.updatephone(this.sid,this.serverData.name,this.serverData.address,this.serverData.phone,this.serverData.gender).subscribe(data => {
            console.log(data);
            this.loading();


        });
    }

    async loading() {
        this.router.navigateByUrl('/home', { replaceUrl: true });

        const toast = await this.toastController.create({
            message: 'Profile Updated Successfully',
            position: 'bottom',
            duration: 3000,


        });
        toast.present();

    }
}
