import { BeautiProcedure } from "./beauti-procedure";

export class Registration {
    customerId: number = 0;
    fullName: string = '';
    instagramName: string = '';
    phoneNumber: string = '';
    procedure: BeautiProcedure = new BeautiProcedure;
    registrationDate: any;
}
