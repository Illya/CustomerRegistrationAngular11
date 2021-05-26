import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient ) {}

  readonly baseURL = 'http://localhost:61351/api/customer'

  formData:Customer = new Customer();

  postRegisterInfo(){
    return this.http.post(this.baseURL, this.formData);
  }
}
