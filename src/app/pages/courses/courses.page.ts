import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {EnquiremodalPage} from '../../enquiremodal/enquiremodal.page';
import {error} from 'selenium-webdriver';


@Component({
    selector: 'app-courses',
    templateUrl: './courses.page.html',
    styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit,OnDestroy {
    ngOnDestroy(): void {
        this.alertController.dismiss();
    }

    id: any;
    location:any;
    result: any = [];
    coursesDetails = {};
    flag = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: LoginService,
                public alertController: AlertController,
                public modalController: ModalController,
                public toastController: ToastController,
                public loadingController : LoadingController) {
    }

    async ngOnInit() {
        const loading = await this.loadingController.create({
            message: 'Loading ...',
        });
        await loading.present();
        this.id = this.route.snapshot.paramMap.get('id');
        this.location = this.route.snapshot.paramMap.get('location');
        console.log('Locid', this.id);
        this.service.courses(this.id).subscribe(async data => {
            this.result = data['data'];
            loading.dismiss();
            if (this.result.length == 0) {
                console.log('data is null');
                const alert = await this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Sorry',
                    subHeader: 'No Data Available ',
                    backdropDismiss:false
                });

                await alert.present();



                const toast = await this.toastController.create({
                    header: 'Sorry',
                    message: 'No Data found',
                    position: 'bottom',
                    animated: true,
                    color: 'secondary',
                    duration:3000,
                    buttons: [
                        {
                            side: 'start',
                            icon: 'alert',
                            handler: () => {
                                console.log('Favorite clicked');
                            }
                        }
                    ]
                });
                toast.present();
            }
            console.log('courses data', this.result);


            /*coursedeatils*/
            this.generateCourseDetails(this.result);

        })
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

    async enquire_alert() {
        const alert = await this.alertController.create({
            header: 'Enquire Now',
            message: 'By submitting the request, you accept our terms of use and privacy policy.',
            inputs: [
                {
                    name: 'mobile',
                    type: 'number',
                    placeholder: 'Enter Number',

                },
                {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Specify Your Requirements'
                }],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: (alertData) => { //takes the data
                        console.log(alertData.name1);
                    }
                }
            ]
        });

        await alert.present();
    }


    async presentModal() {
        const modal = await this.modalController.create({
            component: EnquiremodalPage,
            cssClass: 'my-custom-class'
        });
        return await modal.present();
    }
}
