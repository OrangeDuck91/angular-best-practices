import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ClientsModule } from './clients/clients.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@NgModule({

  imports: [
    CommonModule,
    /** We don't need it here but since we are using Material
     *  on the whole app, let's import the MaterialModule
     *  everywhere for NO reason! 
     */
    MaterialModule,
    ClientsModule,
    SuppliersModule
  ]
})
export class ComponentsModule { }
