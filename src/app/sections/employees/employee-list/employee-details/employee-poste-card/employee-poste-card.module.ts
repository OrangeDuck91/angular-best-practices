import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePosteCardComponent } from './employee-poste-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    EmployeePosteCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    EmployeePosteCardComponent,
  ],
})
export class EmployeePosteCardModule { }
