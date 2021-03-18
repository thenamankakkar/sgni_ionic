import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {EnquiremodalPage} from '../../enquiremodal/enquiremodal.page';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.page.html',
  styleUrls: ['./searchresult.page.scss'],
})
export class SearchresultPage implements OnInit {
  value;
  res:any=[];
  result: any = [];
  flag = false;
  coursesDetails = {};
  constructor(private route : ActivatedRoute,
              private service : LoginService,
              public modalController: ModalController,
              public alertController: AlertController,
              public toastController: ToastController,
              private loadingController: LoadingController,) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading Result...',
    });

    await loading.present();
    this.route.queryParams.subscribe(params => {
      this.value = params["value"];
      console.log("got the value of search", this.value)
    });

    this.service.search(this.value).subscribe(async data => {
      console.log(data);
      /*      this.res = data['data'];

            if(!this.res.isEmpty)
            {
              loading.dismiss();
            }
            else {
              loading.dismiss();
              console.log("nodata found")
            }*/
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
      //this.generateCourseDetails(this.result);

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
