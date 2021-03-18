import {Component, OnInit} from '@angular/core';
import {ModalController, Platform, ToastController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-enquiremodal',
    templateUrl: './enquiremodal.page.html',
    styleUrls: ['./enquiremodal.page.scss'],
})
export class EnquiremodalPage implements OnInit {
    phone: any;
    time: any;
    msg: any;

    private todo: FormGroup;
    serverData: any;


    constructor(public modalController: ModalController, private platform: Platform, private formBuilder: FormBuilder,
                private service: LoginService,
                private router : Router,
                private toastController: ToastController) {

        this.todo = this.formBuilder.group({
            title: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
            anytime: ['', Validators.compose([Validators.required])],
            description: [''],
        });

        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
    }

    ngOnInit() {
    }


    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    
    }


    logForm() {
        //console.log("sqlitedatais",this.register.get("sqliteone"));

        console.log(this.todo.value);
        this.serverData = this.todo.value;
        console.log('phone no is', this.serverData.title);

        // this.register.registerph(this.serverData);
        this.phone = this.todo.get('title');
        this.time = this.todo.get('time');
        this.msg = this.todo.get('msg');
        this.service.enquire(this.phone, this.time, this.msg).subscribe(async data => {
            console.log('enquire data', data);
            this.router.navigateByUrl('/home', {replaceUrl: true});

            const toast = await this.toastController.create({
                message: 'Enquire Request Has Been Sent',
                position: 'bottom',
                duration: 3000,
            });
            toast.present();
            this.dismiss();
        });
    }


}
