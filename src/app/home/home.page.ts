import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../services/login.service';
import {element} from 'protractor';
import {EnquiremodalPage} from '../enquiremodal/enquiremodal.page';
import {AlertController, AnimationController, MenuController, ModalController, NavController, Platform} from '@ionic/angular';
import {createAnimation, Animation} from '@ionic/core';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {NavigationExtras, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {Plugins} from '@capacitor/core';

const {Network, Toast} = Plugins;


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {

    coursesDetails = {};
    coursesDetails2 = {};
    coursesDetails3 = {};
    flag = false;
    result: any = [];
    resulttopcourse: any = [];
    resulttopcourse2: any = [];
    bawa: any = [];
    id: any = [];
    name: any = [];
    result2: any = {};
    maincourse_knowmore: any = [];

    inst_id: any;
    inst_name;


    arrayObject: any = [];
    finalarray: any = [];

    mycode;
    backButtonSubscription;
    walletamt: any = [];
    sid;
    @ViewChild('test') testdiv: ElementRef;


    async ngOnInit() {
        /*top institute*/

        this.service.mainpagetopcourses().subscribe(data => {

            this.result = data['data'];
            console.log(this.result);
            console.log('instituteid', this.result['inst_id']);
            this.generateCourseDetails(this.result);

        });


        /*wallet-card*/
        const result = await this.storage.get('sid');
        console.log(result);

        this.service.wallet(result).subscribe(data => {
            this.walletamt = data['data'];
            console.log(this.walletamt[0]);

        });


        /*top course*/
        this.service.mainpagetopcourses2().subscribe(data => {
            this.resulttopcourse = data['data'];
            console.log('topcoursedata', this.resulttopcourse);
            console.log('instituteid', this.resulttopcourse['inst_id']);
            this.generateCourseDetails2(this.resulttopcourse);
        });


        /*top ielts*/
        this.service.mainpagetopcourses3().subscribe(data => {
            this.resulttopcourse2 = data['data'];
            console.log('topcoursedata', this.resulttopcourse2);
            console.log('instituteid', this.resulttopcourse2['inst_id']);
            this.generateCourseDetails3(this.resulttopcourse2);
        });


    }
    ionViewDidEnter(){
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, () => {
            navigator['app'].exitApp();
            //this.presentAlertConfirm();
        });
    }

    ionViewWillLeave(){
        this.backButtonSubscription.unsubscribe();
    }

    ngAfterViewInit() {
                /*this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, () => {
                    navigator['app'].exitApp();
                    //this.presentAlertConfirm();
                });*/
    }

    ngOnDestroy() {
       // this.backButtonSubscription.unsubscribe();
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Confirm to Exit App !!!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Exit',
                    handler: () => {
                        console.log('Confirm Okay');
                        navigator["app"].exitApp();
                    }
                }
            ]
        });
        await alert.present();
    }


    generateCourseDetails(company, i = 0) {
        console.log(company);

        if (company[i] != undefined) {
            this.service.mainpagetopcourses_knowmore(company[i].inst_id).subscribe((data: any) => {
                this.coursesDetails[company[i].inst_id] = data.data;
                i++;

                this.generateCourseDetails(company, i);
            });
        } else {
            this.flag = true;
            console.log('cd', this.coursesDetails);
        }
    }


    generateCourseDetails2(company, i = 0) {
        console.log(company);

        if (company[i] != undefined) {
            this.service.mainpagetopcourses_knowmore(company[i].inst_id).subscribe((data: any) => {
                this.coursesDetails2[company[i].inst_id] = data.data;
                i++;

                this.generateCourseDetails2(company, i);
            });
        } else {
            this.flag = true;
            console.log('cd', this.coursesDetails2);
        }
    }

    generateCourseDetails3(company, i = 0) {
        console.log(company);

        if (company[i] != undefined) {
            this.service.mainpagetopcourses_knowmore(company[i].inst_id).subscribe((data: any) => {
                this.coursesDetails3[company[i].inst_id] = data.data;
                i++;

                this.generateCourseDetails3(company, i);
            });
        } else {
            this.flag = true;
            console.log('cd', this.coursesDetails3);
        }
    }


    constructor(private httpclient: HttpClient,
                private service: LoginService,
                private elementRef: ElementRef,
                private modalController: ModalController,
                private alertController: AlertController,
                private platform : Platform,
                private router: Router,
                private navCtrl: NavController,
                public storage: Storage,
                private menu: MenuController) {

        let ref = this;
        Network.addListener('networkStatusChange', function(val) {

            var self = this;
            if (val.connected) {


            } else {
                ref.navCtrl.navigateRoot('/nointernet', {replaceUrl: true});
            }
        });

        this.service.getSid('sid').then(
            (d) => console.log("sid",this.sid= d)

        )
    }


    option = {
        slidesPerView: 1.5,
        centerdSlides: true,
        loop: true,
        spaceBetween: 5,
    };

    topcard = {
        slidesPerView: 2.2,
        centerdSlides: true,
        loop: true,
        spaceBetween: 1,
    };

    async showToast() {
        let alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Please Check Your Connection',
            message: 'No internet connection dude.',
            backdropDismiss: false,
            buttons: ['OK']
        });

        await alert.present();
    }


    async presentModal() {
        const modal = await this.modalController.create({
            component: EnquiremodalPage,
            cssClass: 'my-custom-class',
        });
        return await modal.present();
    }


    animation() {
        const animation: Animation = createAnimation('')
            .addElement(this.testdiv.nativeElement)
            .duration(1000)
            .fromTo('opacity', '1', '0.5');

    }


    async logout() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Logout!',
            message: 'Your are going to <strong>Logout</strong>',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        //this.router.navigateByUrl('/login', { replaceUrl: true });
                        this.navCtrl.navigateRoot('/login', {replaceUrl: true});
                        this.service.clear();
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }

    yourSearchFunction(value: any) {

        let navigationExtras: NavigationExtras = {
            queryParams: {
                value: value,
            }
        };

        this.navCtrl.navigateForward(['searchresult'], navigationExtras);

    }


}
