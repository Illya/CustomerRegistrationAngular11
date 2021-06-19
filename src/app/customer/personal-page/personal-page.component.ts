import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Client{
  fullName:string
  instagramName:string
  phoneNumber:string
  telegramChatId:number
}

export interface PeriodicElement {
  position:number;
  name: string;
  date: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Перманент брів', date: "15/1/2021", time: '14:00'},
  {position: 2, name: 'Перманент стрілка (корекція)', date: "20/2/2021", time: '11:00'},
  {position: 3, name: 'Перманент губ', date: "15/2/2021", time: '13:30'},
  {position: 4, name: 'Фарбування вій + ботокс', date: "6/3/2021", time: '17:00'},
  {position: 5, name: 'Перманент міжвійка (корекція)', date: "19/3/2021", time: '11:30'},
  {position: 6, name: 'Перманент губ (корекція)', date: "24/4/2021", time: '15:00'},
  {position: 7, name: 'Довготривала укладка брів', date: "31/5/2021", time: '18:00'},
  {position: 8, name: 'Перманент міжвійка', date: "27/6/2021", time: '16:30'},
  {position: 9, name: 'Перманент стрілка', date: "30/6/2021", time: '10:30'},
  {position: 10, name: 'Ламінування вій', date:"8/7/2021", time: '19:00'},
];

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  formData:Client = new Client();

  displayedColumns = ['position', 'name', 'date', 'time', 'actions'];
  dataSource = ELEMENT_DATA;
  checked = false;
  isDisabled = true;

  ngOnInit(): void {
    this.formData.fullName = 'Марія';
    this.formData.instagramName = 'mariya_inst';
    this.formData.phoneNumber = '0978467373';
    this.formData.telegramChatId = 2664346812123;
  }

  changed(){
    if(this.checked)
    {
      this.dataSource = [
        {position: 1, name: 'Перманент міжвійка', date: "27/6/2021", time: '16:30'},
        {position: 2, name: 'Перманент стрілка', date: "30/6/2021", time: '10:30'},
        {position: 3, name: 'Ламінування вій', date:"8/7/2021", time: '19:00'}
      ]
    }
    else{
      this.dataSource = ELEMENT_DATA;
    }
  }

  disabledCheck(index:number): boolean {
    return (this.dataSource[index].date == "27/6/2021" ||
           this.dataSource[index].date == "30/6/2021" ||
           this.dataSource[index].date == "8/7/2021")
     ? false : true;
  }

  openAcceptDialog() {
    
  }
}
