import { Time } from "@angular/common";
import { BeautiProcedure } from "./beauti-procedure";

export class Customer {
    customerId:number=0;
    fullName:string='';
    instagramName:string='';
    phoneNumber:string='';
    procedureId:number=0;
    procedure:BeautiProcedure=new BeautiProcedure;
    registrationDate:Date=new Date;
    registrationTime:Time={hours:0, minutes:0};
}
