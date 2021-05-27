import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeautiProcedure } from './beauti-procedure';

@Injectable({
  providedIn: 'root'
})
export class BeautiProcedureService {
  
  constructor(private http: HttpClient ) {}

  readonly baseURL = 'http://localhost:61351/api/procedures'

  procedures:BeautiProcedure[];

  getProcedures(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.procedures = res as BeautiProcedure[]);
  }
}
