import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInfoCardComponent } from './employee-info-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    EmployeeInfoCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    EmployeeInfoCardComponent
  ],
})
export class EmployeeInfoCardModule { }
