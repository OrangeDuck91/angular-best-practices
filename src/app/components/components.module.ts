import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesModule } from './employees/employees.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EmployeesModule,
    /** We don't need it here but since we are using Material
     *  on the whole app, let's import the MaterialModule
     *  everywhere for NO reason! 
     */
    MaterialModule
  ]
})
export class ComponentsModule { }
