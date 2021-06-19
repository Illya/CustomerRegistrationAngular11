import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BeautiProcedureService } from 'src/app/shared/beauti-procedure.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('photosAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('.6s', style({ transform: 'translateX(0%)' }))    
      ]),
    ]),
    trigger('photosAnimation2', [ 
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('.6s', style({ transform: 'translateX(0%)' }))    
      ]),
    ])
  ]
})
export class ServicesComponent implements OnInit {

  constructor(public procedureService:BeautiProcedureService) { }

  ngOnInit(): void {
    this.procedureService.getProcedures();
  }

}
