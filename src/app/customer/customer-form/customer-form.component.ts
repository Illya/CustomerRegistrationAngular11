import { DatePipe, Time } from '@angular/common';
import { Component, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BeautiProcedure } from 'src/app/shared/beauti-procedure';
import { BeautiProcedureService } from 'src/app/shared/beauti-procedure.service';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: [ 'customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  constructor(
    public customerService:CustomerService, 
    public procedureService:BeautiProcedureService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.procedureService.getProcedures();
  }

  events: string[] = [];

  addDateEvent(event: MatDatepickerInputEvent<Date>) {
    if(this.customerService.formData.procedure.duration)
    {
        this.customerService.getFreeHours(event.value?.toDateString()!, this.customerService.formData.procedure.duration);
    } 
  }

  addProcedureEvent(procedure: BeautiProcedure){
    if(this.customerService.formData.registrationDate) {
      this.customerService.getFreeHours(new Date(this.customerService.formData.registrationDate).toDateString(), procedure.duration);
    } 
  }

  addTimeEvent(time:Time) {
    const dateTime = new Date(this.customerService.formData.registrationDate);
    dateTime.setHours(time.hours, time.minutes);
    const timeDifference = new DatePipe('en-US');
    this.customerService.formData.registrationDate = timeDifference.transform(dateTime, 'yyyy-MM-ddTHH:mm:ss.sss');
    
  }

  selectedValue: BeautiProcedure;

  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear(),this.minDate.getMonth() + 6, this.minDate.getDay());

  dateFilter = (date: any) => {
    if(date == undefined)
    {
      return false;
    }
    const day = date.getDay();
    return day !== 0
  }

  onSubmit(form:NgForm){
    console.log(this.customerService.formData)
    this.customerService.postRegisterInfo().subscribe(
      res => {
          this._snackBar.open('Запис пройшов успішно!', '', {duration: 3000});
          console.log(res);
          this.resetForm(form);
      },
      err => {
        this.resetForm(form);
        console.log(err);
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.customerService.formData = new Customer();
  }
}