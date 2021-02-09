import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'cities/:id',
    loadChildren: () => import('./pages/cities/cities.module').then( m => m.CitiesPageModule)
  },
  {
    path: 'courses/:id',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'enquiremodal',
    loadChildren: () => import('./enquiremodal/enquiremodal.module').then( m => m.EnquiremodalPageModule)
  },
  {
    path: 'knowmore/:instituteid/:courseid/:institutename/:instituteaddress/:instituteslug',
    loadChildren: () => import('./pages/knowmore/knowmore.module').then( m => m.KnowmorePageModule)
  },
  {
    path: 'booknow/:courseid/:coursename/:institutename/:instituteaddress/:instituteid/:instituteslug',
    loadChildren: () => import('./pages/booknow/booknow.module').then( m => m.BooknowPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'otpmodal',
    loadChildren: () => import('./otpmodal/otpmodal.module').then( m => m.OtpmodalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
