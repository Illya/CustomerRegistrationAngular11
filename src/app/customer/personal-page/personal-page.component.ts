import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router) { }

  formData:Client = new Client();
  changedFormData = new Client();
  ifSaved:boolean = false;

  displayedColumns = ['position', 'name', 'date', 'time', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  checked = false;
  isDisabled = true;

  ngOnInit(): void {
    this.formData.fullName = 'Марія';
    this.formData.instagramName = 'mariya_inst';
    this.formData.phoneNumber = '0978467373';
    this.formData.telegramChatId = 2664346812123;

    this.changedFormData.fullName = 'Марія';
    this.changedFormData.instagramName = 'mariya_inst';
    this.changedFormData.phoneNumber = '0978467373';
    this.changedFormData.telegramChatId = 2664346812123;
  }

  changed(){
    if(this.checked)
    {
      this.dataSource.data = [
        {position: 1, name: 'Перманент міжвійка', date: "27/6/2021", time: '16:30'},
        {position: 2, name: 'Перманент стрілка', date: "30/6/2021", time: '10:30'},
        {position: 3, name: 'Ламінування вій', date:"8/7/2021", time: '19:00'}
      ]
    }
    else{
      this.dataSource.data = ELEMENT_DATA;
    }
  }

  disabledCheck(index:number): boolean {
    return (this.dataSource.data[index].date == "27/6/2021" ||
           this.dataSource.data[index].date == "30/6/2021" ||
           this.dataSource.data[index].date == "8/7/2021")
     ? false : true;
  }

  openAcceptDialog(index:number) {
    this.dataSource.data.splice(index,1);
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
    this._snackBar.open('Запис скасовано успішно!', '', {duration: 3000});
  }

  onCancelClick(form:NgForm) {
    if(!this.ifSaved)
    {
      this.formData = this.changedFormData;
    }
  }

  onSaveClick(form:NgForm){
    this.changedFormData = form.form.value;
    this.ifSaved = true;
    this._snackBar.open('Зміни успішно збережені!', '', {duration: 3000});
  }

  saverange(){
    this.ifSaved = false;
  }

  onReturnClick()
  {
    this.router.navigateByUrl('');
  }
}
