import { Component, OnInit} from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: [ 'customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(public service:CustomerService) { }

  ngOnInit(): void {
  }
  
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
}