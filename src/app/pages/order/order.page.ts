import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Storage} from '@ionic/storage';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
})

export class OrderPage implements OnInit, PipeTransform {

    result: any = [];
    result2: any = {};
    groupedItems = {};

    sid;

    final: any = [];


    constructor(private service: LoginService, public storage: Storage, private toastController: ToastController) {
    }

    async ngOnInit() {
        const result = await this.storage.get('sid');
        console.log(result);


        this.service.bookings(result).subscribe(async data => {
            if (data == null) {
                console.log('data is null');
                const toast = await this.toastController.create({
                    header: 'Sorry',
                    message: 'No Orders Yet',
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
            }

            this.result = data['data'];
            console.log(this.result);
            let index = 1;
            this.result.forEach((value) => {

                if (this.groupedItems[value.orderid] == undefined) {
                    this.groupedItems[value.orderid] = [];
                    this.groupedItems[value.orderid].push(value);

                } else {
                    this.groupedItems[value.orderid].push(value);
                }
            });
            console.log(Object.entries(this.groupedItems));
            this.final = Object.entries(this.groupedItems);
            this.final.reverse();


        });


    }

    transform(items, field: string, value): any[] {
        if (!items) {
            return [];
        }
        if (!value || value.length == 0) {
            return items;
        }
        return items.filter(it => value.filter(val => it[field].includes(val)).length > 0)
    }

}
