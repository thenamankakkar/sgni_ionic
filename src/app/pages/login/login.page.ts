import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
import {IonSearchbar, LoadingController, MenuController, ModalController, ToastController} from '@ionic/angular';
import {OtpmodalPage} from '../../otpmodal/otpmodal.page';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    private todo: FormGroup;
    serverData: any;

    otp;
    scode;
    sid;
    spid;
    phone;

    login: any = {};
    loginarray: any = [];

    getsid;


    constructor(private formBuilder: FormBuilder,
                private register: LoginService,
                private http: HttpClient,
                private modalController: ModalController,
                private loadingController: LoadingController,
                private toastController: ToastController,
                private menu: MenuController) {
        this.todo = this.formBuilder.group({
            phone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
            ref: ['', Validators.compose([Validators.minLength(3)])],
        });

        //this.register.get("sid");
    }

    ngOnInit() {
        this.menu.close();

    }

    logForm() {

        this.loading();

        //console.log("sqlitedatais",this.register.get("sqliteone"));
        console.log(this.todo.value);
        this.serverData = this.todo.value;
        console.log('phone no is', this.serverData.phone);


        this.register.register(this.serverData.phone, this.serverData.ref).subscribe(data => {
            console.log(data);
            this.loginarray = data;
            this.loginarray.data.forEach(async (item) => {
                console.log('single-id', item.studentid);
                console.log('otp', item.otp);
                console.log('otp', item.phone);

                this.otp = item.otp;

                console.log('scode', item.scode);
                /*set the values to the variable of localstorage*/
                this.scode = item.scode;
                this.sid = item.studentid;
                this.phone = item.phone;
                this.presentHalfModal();
                this.loadingController.dismiss();

                const toast = await this.toastController.create({
                    message: 'OTP has been sent',
                    position: 'middle',
                    duration: 3000,

                });
                toast.present();


            });







        });
    }


    async presentHalfModal() {
        console.log('buttonclick');
        const modal = await this.modalController.create({
            component: OtpmodalPage,
            cssClass: 'half-modal',
            componentProps: {
                otp: this.otp,
                sid: this.sid,
                scode: this.scode,
                phone: this.phone,
                spid : this.spid

            }
        });

        return await modal.present();
    }


    async loading() {
        const loading = await this.loadingController.create({
            message: 'Sending OTP ..',
        });

        await loading.present();


    }
}
