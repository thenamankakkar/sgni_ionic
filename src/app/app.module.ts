import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import {EnquiremodalPageModule} from './enquiremodal/enquiremodal.module';
import {OtpmodalPageModule} from './otpmodal/otpmodal.module';
import {IonicStorageModule} from '@ionic/storage';
import {Network} from '@ionic-native/network/ngx'
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), AppRoutingModule,HttpClientModule,EnquiremodalPageModule,OtpmodalPageModule
],
  providers: [
    StatusBar,
      FormsModule,
      Ng2SearchPipeModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LoginService,Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
