import { Component, Inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerComponent } from '../customer.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  btnClick() {
    this.router.navigateByUrl('/personal-page');
  }

  goBack(): void {
    this.location.back();
  }
}

