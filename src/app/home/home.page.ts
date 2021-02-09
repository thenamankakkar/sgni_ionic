import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../services/login.service';
import {element} from 'protractor';
import {EnquiremodalPage} from '../enquiremodal/enquiremodal.page';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    result: any = [];
    bawa: any = [];
    id: any = [];
    name: any = [];
    result2: any = {};
    maincourse_knowmore: any = [];

    inst_id: any;
    inst_name;


    arrayObject: any = [];
    finalarray: any = [];

    @ViewChild('test') testdiv: ElementRef;

    ngOnInit(): void {

        var self = this;
        this.service.mainpagetopcourses().subscribe(data => {
            this.result = data['data'];
            console.log(this.result);
            this.result.forEach(function(company) {
                self.inst_id = company.inst_id;
                self.inst_name = company.name;

                if (!company.inst_id.isEmpty) {

                    self.service.mainpagetopcourses_knowmore(company.inst_id).subscribe(data => {
                        console.log(data);


                    });

                }
            });

        });
        console.log(self.bawa)
    }


    constructor(private httpclient: HttpClient,
                private service: LoginService,
                private elementRef: ElementRef,
                private modalController: ModalController) {
    }

    option = {
        slidesPerView: 1.5,
        centerdSlides: true,
        loop: true,
        spaceBetween: 5,
    };

    async presentModal() {
        const modal = await this.modalController.create({
            component: EnquiremodalPage,
            cssClass: 'my-custom-class'
        });
        return await modal.present();
    }


}
