import {AfterViewInit, Component, DoCheck, NgZone, OnInit, QueryList, ViewChildren} from '@angular/core';

import {AlertController, IonRouterOutlet, NavController, Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Storage} from '@ionic/storage';
import {LoginService} from './services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {App, Plugins,} from '@capacitor/core';

const {Share} = Plugins;


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit,DoCheck {
    async ngDoCheck() {
        //this.mycode = await this.storage.get('scode');
    }
    async ngAfterViewInit() {
        this.mycode = await this.storage.get('scode');
    }


    async ngOnInit() {
    }

    backButtonSubscription;
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    mycode;

    constructor(
        private platform: Platform,
        private statusBar: StatusBar,
        public storage: Storage,
        private alertController: AlertController,
        private navCtrl: NavController,
        private service: LoginService,
        public router: Router,
        public param: ActivatedRoute,
    ) {


    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByHexString('#ffffff');

            this.backButtonEvent();
        });
    }


    backButtonEvent() {
        this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
            this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
                if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                } else if (this.router.url === '/home') {
                    this.presentAlertConfirm();
                }
            });
        });
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
                        navigator['app'].exitApp();
                    }
                }
            ]
        });
        await alert.present();
    }


    //Called when view is left
    ngOnDestroy() {
        // Unregister the custom back button action for this page
        this.backButtonSubscription.unsubscribe();
    }


    fb() {
        window.open('https://www.facebook.com/SGNI.IN/', '_system', 'location=yes');
    }


    twitter() {
        window.open('https://twitter.com/sgnisgni', '_system', 'location=yes');
    }

    terms() {
        this.router.navigateByUrl("/terms");
    }

    instagram() {
        window.open('https://www.instagram.com/sgni.in/', '_system', 'location=yes');
    }

    linkedin() {
        window.open('https://www.linkedin.com/in/sgni/', '_system', 'location=yes');
    }

    async signout() {
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

    async shareapp() {
        await Share.share({
            title: 'Install The SGNI App',
            text: 'Way to discount education',
            url: 'https://play.google.com/store/apps/details?id=vinfo.tech.sgni',
            dialogTitle: 'Share with buddies'
        });

    }

    async invite() {
        await Share.share({
            title: 'Install The SGNI App',
            text: 'Login with my referal code you will get discount money' + this.mycode,
           // url: 'https://play.google.com/store/apps/details?id=vinfo.tech.sgni',
            dialogTitle: 'Share with buddies'
        });

    }

    async didopen() {
        this.mycode = await this.storage.get('scode');
    }
}
