import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details.container';
import { EmployeeInfoCardModule } from './employee-info-card/employee-info-card.module';
import { EmployeePosteCardModule } from './employee-poste-card/employee-poste-card.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { AddressModule } from 'src/app/shared/components/address/address.module';

@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeInfoCardModule,
    EmployeePosteCardModule,
    HeaderModule,
    AddressModule
  ],
  exports: [
    EmployeeDetailsComponent
  ],
})
export class EmployeeDetailsModule { }
