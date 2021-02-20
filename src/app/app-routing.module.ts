import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TaskComponent } from './task/task.component';

const appRoutes: Routes = [{
    path: '',
      children: [
            {
                path: '',
                component: TaskComponent
            },
            {
                path: '**',
                redirectTo: ''
              }
          ]
        }
]
 

