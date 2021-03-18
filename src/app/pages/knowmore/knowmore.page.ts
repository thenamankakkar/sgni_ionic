import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
    selector: 'app-knowmore',
    templateUrl: './knowmore.page.html',
    styleUrls: ['./knowmore.page.scss'],
})
export class KnowmorePage implements OnInit {
    instituteid: any;
    courseid: any;
    institutename: any;
    instituteaddress: any;
    instituteslug: any;
    result: any = [];
    result2: any = [];

    constructor(private route: ActivatedRoute,
                private service : LoginService) {
    }

    ngOnInit() {
        this.instituteid = this.route.snapshot.paramMap.get('instituteid');
        this.courseid = this.route.snapshot.paramMap.get('courseid');
        this.institutename = this.route.snapshot.paramMap.get('institutename');
        this.instituteaddress = this.route.snapshot.paramMap.get('instituteaddress');
        this.instituteslug = this.route.snapshot.paramMap.get('instituteslug');
        //console.log(this.institutename);
        console.log(this.instituteid);

        this.service.knowmore(this.instituteid).subscribe(data =>{
            console.log("know-more response",data);
            this.result=data['data'];
        });


        this.service.Show_institutes_Photo(this.instituteid).subscribe(data =>{
            console.log("show institutes response",data);
            this.result2=data['data'];
        })


    }


    option = {
        slidesPerView: 1,
        centerdSlides: true,
        loop: true,
        initialSlide: 1,
        speed: 100,
        autoplay:true
    };


}
