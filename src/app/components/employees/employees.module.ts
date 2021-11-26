import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddressComponent } from './address/address.component';
import { SharedComponentsModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // EmployeeDetailComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule
  ],
  exports: [
    /** 
     * This component was made to be re-usable, but declared in the wrong module.
     * To use it, we will have to import all EmployeesModule
     */
    AddressComponent
  ]

})
export class EmployeesModule { }
