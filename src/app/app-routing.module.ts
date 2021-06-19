import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalPageComponent } from './customer/personal-page/personal-page.component';
import { CustomerComponent } from './customer/customer.component';
import { ServicesComponent } from './customer/services/services.component';
import { PromotionsComponent } from './customer/promotions/promotions.component';
import { SignUpComponent } from './customer/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: CustomerComponent,
    children: [
    {
      path: 'services',
      component: ServicesComponent
    },
    {
      path: 'promotions',
      component: PromotionsComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    }
  ]
  },
  { path: 'personal-page', component: PersonalPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
