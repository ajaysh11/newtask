import { NgModule, ChangeDetectorRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatListModule} from '@angular/material/list'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { NewTaskComponent } from './new-task/new-task.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultMatCalendarRangeStrategy, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'; 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSelectModule} from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router'; 
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule, 
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatSelectModule,
    ReactiveFormsModule ,
    FormsModule,
  ],
  providers: [DefaultMatCalendarRangeStrategy,AppComponent,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
