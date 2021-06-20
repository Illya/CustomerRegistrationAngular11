import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DemoMaterialModule } from './testMaterial/material-module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicesComponent } from './customer/services/services.component';
import { PromotionsComponent } from './customer/promotions/promotions.component';
import { LoginDialogComponent } from './customer/login-dialog/login-dialog.component';
import { SignUpComponent } from './customer/sign-up/sign-up.component';
import { PersonalPageComponent } from './customer/personal-page/personal-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminPageComponent } from './customer/admin-page/admin-page.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    ServicesComponent,
    PromotionsComponent,
    LoginDialogComponent,
    SignUpComponent,
    PersonalPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
