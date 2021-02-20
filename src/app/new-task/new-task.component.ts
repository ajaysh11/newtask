import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import {FormControl, FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {data} from '../modals'
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task = '';
  associated = '';
  picker10 = '';
  picker11 = '';
  picker20 = '';
  picker21 = '';
  selected = ''; 
  taskarray: Array<data> = [];
  constructor(private fb: FormBuilder,private appc: AppComponent,private cdr:ChangeDetectorRef) {  
    
   }

  ngOnInit(): void {
  }

  onChangeEvent(_event: any){
    var date = new Date(_event.target.value ),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2); 
    console.log([date.getFullYear(), mnth, day].join("-"));
    this.picker10 = [date.getFullYear(), mnth, day].join("-");
}
onChangeEvent1(_event: any){
    var date = new Date(_event.target.value ),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2); 
    console.log([date.getFullYear(), mnth, day].join("-"));
    this.picker20 = [date.getFullYear(), mnth, day].join("-");
}
  selectChanged(_event: any){      
    this.picker11 = _event
  }
  selectChanged1(_event: any){      
    this.picker21 = _event
  } 
  createtask() { 
    console.log(this.task);
    console.log(this.associated);
    console.log(this.picker10);
    console.log(this.picker11);
    console.log(this.picker20);
    console.log(this.picker21);
    console.log(this.selected);
 
    let now = new Date(); 

    let customObj = new data();
    customObj.task = this.task;
    customObj.associated = this.associated; 
    customObj.due_date = this.picker10;
    customObj.due_time = this.picker11; 
    customObj.rem_date = this.picker20;
    customObj.rem_time = this.picker21; 
    customObj.owner = this.selected;
    customObj.current_dt = now+"";
    this.taskarray.push(customObj); 
    console.warn(customObj);
    console.log(this.taskarray.length);
    this.appc.closeDialog1(this.taskarray);

  }

  
	findObjIndexInArray(key: string, value: string, array: any[]) {
		var index = array.findIndex(function (elem) {
        return elem[key] == value;
      })
		return index
	}
}
