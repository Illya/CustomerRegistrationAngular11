import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {LoginDialogComponent} from 'src/app/customer/login-dialog/login-dialog.component'
import { Customer } from '../shared/customer';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  title = 'my-app';
  companyName = 'IVCHUK BROWBAR';
  isShowHideFlag = '';

  signIn:string;

  constructor(public dialog: MatDialog, public customer: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.signIn ="Увійти"
  }

  openDialog() {
    if(this.signIn != "Увійти"){
      this.signIn = "Увійти"
    }
    else {
      const dialog = this.dialog.open(LoginDialogComponent, {
      width: '400px',
      height: '350px',});
    
      dialog.afterClosed().subscribe(() => {
        this.signIn = 'Марія | Вийти';
        this.customer.formData.fullName = "Марія";
        this.customer.formData.phoneNumber = "0978467373";
        this.customer.formData.instagramName = "mari_inst";
      });  
    }
    
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
