import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {mark} from '@angular/compiler-cli/src/ngtsc/perf/src/clock';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.page.html',
  styleUrls: ['./orderdetails.page.scss'],
})
export class OrderdetailsPage implements OnInit {
  coursename: any;
  institutename:any;
  instituteaddress:any;
  fees:any;
  orderid:any;
  finalfees;
  studentid;
  wb;
  orderdate;
  batch;
  markup;
  discount;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {

    this.coursename = this.route.snapshot.paramMap.get('coursename');
    this.institutename = this.route.snapshot.paramMap.get('institutename');
    this.instituteaddress = this.route.snapshot.paramMap.get('instituteaddress');
    this.fees = this.route.snapshot.paramMap.get('fees');
    this.finalfees = this.route.snapshot.paramMap.get('finalfees');
    this.orderid = this.route.snapshot.paramMap.get('orderid');
    this.studentid = this.route.snapshot.paramMap.get('studentid');
    this.wb = this.route.snapshot.paramMap.get('wb');
    this.orderdate = this.route.snapshot.paramMap.get('orderdate');
    this.batch = this.route.snapshot.paramMap.get('batch');


    this.markup = this.route.snapshot.paramMap.get('markup');
    console.log("markup is this ", this.markup);


    this.discount = this.fees /100 * this.markup;
    console.log("discount is this",this.discount)


  }

}
