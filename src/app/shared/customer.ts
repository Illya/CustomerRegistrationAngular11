import { Time } from "@angular/common";
import { BeautiProcedure } from "./beauti-procedure";

export class Customer {
    fullName:string='';
    instagramName:string='';
    phoneNumber:string='';
    procedure:BeautiProcedure=new BeautiProcedure;
    registrationDate:any;
}
