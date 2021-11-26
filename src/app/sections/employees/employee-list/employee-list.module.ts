import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    EmployeeListComponent
  ],
})
export class EmployeeListModule { }
