import { Component, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BeautiProcedure } from 'src/app/shared/beauti-procedure';
import { BeautiProcedureService } from 'src/app/shared/beauti-procedure.service';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: [ 'customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(public customerService:CustomerService, public procedureService:BeautiProcedureService) { }

  ngOnInit() {
    this.procedureService.getProcedures();
  }

  events: string[] = [];

  addEvent(event: MatDatepickerInputEvent<Date>) {
    if(this.customerService.formData.procedure.duration)
    {
        this.customerService.getFreeHours(event.value?.toDateString()!, this.customerService.formData.procedure.duration);
    } 
  }

  myForm = new FormControl('');

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
    this.customerService.postRegisterInfo().subscribe(
      res => {

      },
      err => {
        console.log(err);
      }
    );
  }
}