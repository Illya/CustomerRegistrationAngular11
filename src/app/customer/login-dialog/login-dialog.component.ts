import { Component, Inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerComponent } from '../customer.component';
import { NgForm } from '@angular/forms';

class Cred {
  login:string;
  password:string;
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  
  constructor(
    public dialog: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cred,
    private router: Router, 
    private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  btnClick(form:NgForm) {
    if(form.form.value.login == 'admin')
    {
      this.router.navigateByUrl('/admin-page');
    }

  }
}

