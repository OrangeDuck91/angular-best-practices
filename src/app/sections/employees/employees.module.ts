import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.container';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    EmployeeListModule
  ]
})
export class EmployeesModule { }
