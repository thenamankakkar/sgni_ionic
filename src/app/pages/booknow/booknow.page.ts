import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from '@ionic/angular';
import {Storage} from '@ionic/storage';





@Component({
    selector: 'app-booknow',
    templateUrl: './booknow.page.html',
    styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {

    /* myDate = new Date().toISOString().toString();
     dateFormat = this.myDate.split('T');*/
    myDate: any;
    dateFormat: any;

    single_valueArray: any = {};

    coursename: any;
    courseid: any;
    institutename: any;
    instituteaddres: any;
    instituteid: any;
    instituteslug: any;
    batchtime: any;
    fees_id: any;
    fee_status: string;
    time: string;
    result: any = [];
    private todo: FormGroup;

    //Get value on ionChange on IonRadioGroup
    selectedRadioGroup: any;
    //Get value on ionSelect on IonRadio item
    selectedRadioItem: any;
    batch: any;

    walletamount: any = [];
    checkbox: boolean = false;
    addwalletbalance: any;

    emptyarray =[];


    constructor(private route: ActivatedRoute,
                private service: LoginService,
                private formBuilder: FormBuilder,
                private loadingController: LoadingController,
                private router: Router,
                public storage: Storage) {

        this.todo = this.formBuilder.group({
            batch: ['', Validators.compose([Validators.required])],
            duration: ['', Validators.compose([Validators.required])],
            date: ['', Validators.compose([Validators.required])],
        });

    }

    ngOnInit() {

        this.coursename = this.route.snapshot.paramMap.get('coursename');
        this.courseid = this.route.snapshot.paramMap.get('courseid');
        this.institutename = this.route.snapshot.paramMap.get('institutename');
        this.instituteaddres = this.route.snapshot.paramMap.get('instituteaddress');
        this.instituteid = this.route.snapshot.paramMap.get('instituteid');
        this.instituteslug = this.route.snapshot.paramMap.get('instituteslug');

        console.log(this.coursename);

        this.service.courseduration(this.courseid).subscribe(data => {
            this.result = data['data'];
            //this.fee_status = data.fee_status;
            this.single_valueArray = data;
            console.log('booknow', this.result);
            console.log('institutecourseid', this.courseid);



            /*testing*/
            this.result.forEach(async (item) => {
                console.log('testing', item.fees_id);
                console.log('testing', item.fee_status);

                if (item.fee_status=='Y')
                {
                    this.emptyarray.push({
                        duration: item.duration,
                        fees: item.fees,
                        fees_id:item.fees_id,
                        final_fees: item.final_fees,
                        markup: item.markup
                    });

                }

            });

            console.log("outofloop",this.emptyarray)

        });
        this.getwalletAmount();






    }


    radioGroupChange(event) {
        console.log('radioGroupChange', event.detail);
        this.selectedRadioGroup = event.detail;
        console.log('feesid', this.selectedRadioGroup.value);
        this.fees_id = this.selectedRadioGroup.value;
    }

    radioFocus() {
        console.log('radioFocus');
    }

    radioSelect(event) {
        console.log('radioSelect', event.detail);
    }

    radioBlur() {
        console.log('radioBlur');
    }

    onSelectChange(selectedValue: any) {
        selectedValue.split('T')[0];
        this.dateFormat = selectedValue.split('T');
        console.log(this.dateFormat[0]);

        console.log('Selected', selectedValue);
        this.time = this.dateFormat[0];
    }

    batchChange(batch) {
        console.log('Selectedbatch', batch);
        this.batchtime = batch;
    }

    async payatcenter() {
        const loading = await this.loadingController.create({
            message: 'Booking Order...',
        });

        await loading.present();
        const result = await this.storage.get('sid');
        console.log(result);
        this.service.payatcenter(this.courseid, this.fees_id, `${this.time}|${this.batchtime}`, this.instituteid, this.instituteslug, result, this.addwalletbalance).subscribe(data => {
            loading.dismiss();
            this.router.navigateByUrl('/home', {replaceUrl: true});
        });

    }


    async logForm() {

        const loading = await this.loadingController.create({
            message: 'Booking Order...',
        });

        await loading.present();
        const result = await this.storage.get('sid');
        console.log(result);
        this.service.payatcenter(this.courseid, this.fees_id, `${this.time}|${this.batchtime}`, this.instituteid, this.instituteslug, result, this.addwalletbalance).subscribe(data => {
            loading.dismiss();
            this.router.navigateByUrl('/home', {replaceUrl: true});
        });
    }

    async getwalletAmount() {
        const result = await this.storage.get('sid');
        console.log(result);
        this.service.wallet(result).subscribe(data => {
            this.walletamount = data['data'];
            console.log(this.walletamount[0]);
        });
    }

    addamount() {
        this.checkbox = !this.checkbox;
        this.addwalletbalance = this.walletamount[0];
    }
}


