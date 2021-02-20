import { formatDate, JsonPipe } from '@angular/common';
import { Component, Inject, ChangeDetectorRef , OnInit ,ChangeDetectionStrategy, DoCheck } from '@angular/core';
import {MatDialog, MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { data } from './modals';
import { NewTaskComponent } from './new-task/new-task.component';
import { BehaviorSubject } from 'rxjs';
import { DatePipe } from '@angular/common';
import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit,DoCheck  {
  currentUser: any;
  title = 'newtask';
  public newtask: Array<data> = [];
  public nd = '';
  public data:any; 

  
  constructor(private matDialog: MatDialog, private dc: ChangeDetectorRef,private datepipe: DatePipe) {
  } 
  ngOnInit(){ 
    localStorage.removeItem('currentUser');
    let newdate = new Date();
    this.nd = newdate+"";
  }
  ngDoCheck(){ 
    this.dc.detectChanges();
  }

  openDialog() {
    this.matDialog.open(NewTaskComponent,  {
      width: '500px',
    });
  }
  closeDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dc.detectChanges();
  }
  closeDialog1(_taskk: Array<data>) { 
    let customObj = new data();
    customObj.task = _taskk[0].task;
    customObj.associated = _taskk[0].associated; 
    customObj.due_date = _taskk[0].due_date;
    customObj.due_time = _taskk[0].due_time; 
    customObj.rem_date = _taskk[0].rem_date;
    customObj.rem_time = _taskk[0].rem_time; 
    customObj.owner = _taskk[0].owner;
    customObj.current_dt = _taskk[0].current_dt;
    customObj.select = 'false';
    let date1 = formatDate(new Date(),'yyyy-MM-dd','en_US');
    let dateString;
    if(_taskk[0].due_date != null){
      dateString = _taskk[0].due_date;
    }else{      
      dateString = '0000-00-00';
    }
    let olddate = new Date(dateString);
    let date2 = formatDate(olddate,'yyyy-MM-dd','en_US');

    console.log(date1);
    console.log(date2);
   if(date1>date2){
    customObj.expire = 'yes';
    }else{
      customObj.expire = 'no';
    }
    if(this.newtask.length != null){
      customObj.id = (this.newtask.length) + 1;
    }else{      
    customObj.id = 1;
    }
    this.newtask.push(customObj); 
    // this.dc.detectChanges();
    localStorage.setItem('currentUser',JSON.stringify(this.newtask));
    console.log(this.newtask);
    this.matDialog.closeAll();

    
  }

  get formList(){ return  JSON.parse(localStorage.getItem('currentUser') || '[]'); }

  openchange(_event: any){
    console.log(_event);
    $("#"+_event).removeClass('d-none');
  }

  select(_id: any){
  }
   
   
} 