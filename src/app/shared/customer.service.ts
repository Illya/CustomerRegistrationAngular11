import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient ) {}

  readonly baseURL = 'http://localhost:61351/api/customer'

  formData:Customer = new Customer();
}
