import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.alertController.dismiss();
  }

  id: any;
  result: any = [];
  searchTerm:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service : LoginService,
              private loadingController : LoadingController,
              private toastController : ToastController,
              private alertController : AlertController) { }

  async ngOnInit() {

    const loading = await this.loadingController.create({
      message: 'Loading ...',
    });
    await loading.present();

    this.id = this.route.snapshot.paramMap.get('id');
    console.log("get the values in cities", this.id);


    this.service.city(this.id).subscribe(data => {
      this.result = data['data'];
      console.log("cities data", data);
      loading.dismiss();
    }, async (error) => {                              //Error callback
      console.error('error caught in component', error.message);
      console.error('no record found');

      loading.dismiss();

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
        duration: 3000,
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


    })
    ;
  }

}
