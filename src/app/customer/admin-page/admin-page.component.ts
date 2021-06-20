import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  position:number;
  client:string;
  phone:string;
  instagram:string;
  procedure: string;
  date: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, client:'Марія', phone:'0978467373', instagram:'mariya_inst', procedure: 'Перманент брів', date: "15/1/2021", time: '14:00'},
  {position: 2, client:'Ірина', phone:'0978464433', instagram:'mariya_inst',procedure: 'Перманент стрілка (корекція)', date: "20/2/2021", time: '11:00'},
  {position: 3, client:'Юлія', phone:'0978464543', instagram:'mariya_inst',procedure: 'Перманент губ', date: "15/2/2021", time: '13:30'},
  {position: 4, client:'Надія', phone:'0978887373', instagram:'mariya_inst',procedure: 'Фарбування вій + ботокс', date: "6/3/2021", time: '17:00'},
  {position: 5, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Перманент міжвійка (корекція)', date: "19/3/2021", time: '11:30'},
  {position: 6, client:'Євгенія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Перманент губ (корекція)', date: "24/4/2021", time: '15:00'},
  {position: 7, client:'Юлія', phone:'0978464543', instagram:'mariya_inst',procedure: 'Довготривала укладка брів', date: "31/5/2021", time: '18:00'},
  {position: 8, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Перманент міжвійка', date: "27/6/2021", time: '16:30'},
  {position: 9, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Перманент стрілка', date: "31/6/2021", time: '10:30'},
  {position: 10, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Ламінування вій', date:"8/7/2021", time: '19:00'},
  {position: 11, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Перманент міжвійка', date: "17/6/2021", time: '16:30'},
  {position: 12, client:'Катерина', phone:'0975557373', instagram:'mariya_inst',procedure: 'Перманент стрілка', date: "30/6/2021", time: '10:30'},
  {position: 13, client:'Надія', phone:'0978887373', instagram:'mariya_inst',procedure: 'Ламінування вій', date:"6/7/2021", time: '19:00'},
];

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  checked = false;

  ngOnInit(): void {
  }

  onReturnClick()
  {
    this.router.navigateByUrl('');
  }

  displayedColumns: string[] = ['position','client', 'phone', 'instagram', 'procedure', 'date', 'time','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changed(){
    if(this.checked)
    {
      this.dataSource.data = [
        {position: 1, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Перманент міжвійка', date: "27/6/2021", time: '16:30'},
        {position: 2, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Перманент стрілка', date: "31/6/2021", time: '10:30'},
        {position: 3, client:'Марія', phone:'0978467373', instagram:'mariya_inst',procedure: 'Ламінування вій', date:"8/7/2021", time: '19:00'},
        {position: 4, client:'Катерина', phone:'0975557373', instagram:'mariya_inst',procedure: 'Перманент стрілка', date: "30/6/2021", time: '10:30'},
        {position: 5, client:'Надія', phone:'0978887373', instagram:'mariya_inst',procedure: 'Ламінування вій', date:"6/7/2021", time: '19:00'}
      ]
    }
    else{
      this.dataSource.data = ELEMENT_DATA;
    }
  }

  disabledCheck(index:number): boolean {
    return (this.dataSource.data[index].date == "27/6/2021" ||
           this.dataSource.data[index].date == "30/6/2021" ||
           this.dataSource.data[index].date == "31/6/2021" ||
           this.dataSource.data[index].date == "6/7/2021" ||
           this.dataSource.data[index].date == "8/7/2021")
     ? false : true;
  }

  openAcceptDialog(index:number) {
    this.dataSource.data.splice(index,1);
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
    this._snackBar.open('Запис скасовано успішно!', '', {duration: 3000});
  }

}
