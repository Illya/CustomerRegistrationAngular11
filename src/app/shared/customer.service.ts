import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Time } from '@angular/common';

interface Times {
  hour: string;
  minute: string;
}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient ) {}

  readonly baseURL = 'http://localhost:61351/api/customer'

  formData:Customer = new Customer();

  freeHours: Times[];

  getFreeHours(date:string, duration:number){
    let params = new HttpParams()
    .set('date', date)
    .set('duration', duration.toString());

    this.http.get(this.baseURL + '/dates' , {params: params})
    .toPromise()
    .then(res => {
      this.freeHours = res as Times[];
      this.freeHours.forEach(time => 
        {
          if(time.minute == "0")
          {
              time.minute += "0";
          }
        }
      );
    });
  }

  postRegisterInfo(){
    return this.http.post(this.baseURL, this.formData);
  }
}
