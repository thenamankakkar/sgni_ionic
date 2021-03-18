import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
import {IonSearchbar, LoadingController, ToastController} from '@ionic/angular';
import {RouterModule} from '@angular/router';


@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

    @ViewChild('search',{static:false}) search : IonSearchbar;

    url = 'https://sgni.in/api/run_new.php?call=locationcity';

    result: any = {};

    result2: any = [];


    searchTerm: string ;

    value : string;

    location: string;
    locid: string;



     constructor(private http: HttpClient,
                      private service: LoginService,
                      public toastController: ToastController,
                      private router: RouterModule,
                      private loadingController: LoadingController,) {}


    async ngOnInit() {

        const loading = await this.loadingController.create({
            message: 'Loading ...',
        });

        await loading.present();
        this.service.location().subscribe(data => {
            this.result2 = data['data'];
            loading.dismiss();
            console.log(data);
        });

        /*        return this.http.get(`https://sgni.in/api/run_new.php?call=locationcity`).subscribe(data => {

                    this.genres = data.data;

                });


                return new Promise((resolve, reject) => {
                    this.http.get(`${this.url}`).subscribe((res) => {
                        console.log('RegisterApi', res);
                        this.result = res;

                        console.log('ttt', this.result2);
                        this.result.data.forEach((item) => {


                            this.location = item.location;
                            this.locid = item.locid;

                            console.log('loc-id', item.locid);
                            console.log('location', item.location);
                        });
                    }, err => {
                        reject(err);
                    });
                });*/


    }

/*    async toast(event,item) {
        const toast = await this.toastController.create({
            color: 'dark',
            duration: 2000,
            message: 'Paired successfully',
        });
        await toast.present();
    }*/


}
