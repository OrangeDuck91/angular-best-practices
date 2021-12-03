import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedComponentsModule } from '../shared/shared.module';
import { AddressModule } from 'src/app/shared/components/address/address.module';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule,
    AddressModule,
    /** 
     * Have to import the whole EmployeesModule just to use the
     * AddressComponent, crossing the functional line between 
     * Employees and Client that should stay separeted
     */
  ]
})
export class ClientsModule { }
