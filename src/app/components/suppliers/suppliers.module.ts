import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SharedComponentsModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ]
})
export class SuppliersModule { }
