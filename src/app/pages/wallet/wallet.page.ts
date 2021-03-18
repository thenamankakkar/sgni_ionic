import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.page.html',
    styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

    result: any = [];
    result2: any = {};
    wb;

    constructor(private service: LoginService, public storage: Storage) {
    }

    async ngOnInit() {
        const result = await this.storage.get("sid");
        console.log(result);

        this.service.wallet(result).subscribe(data => {
            this.result = data['data'];
            console.log(this.result[0]);

        });
    }
}
