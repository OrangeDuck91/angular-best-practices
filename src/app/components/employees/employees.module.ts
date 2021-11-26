import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // Modules for list
    // Modules for Detail
    // Modules for Cards
  ],

})
export class EmployeesModule { }
