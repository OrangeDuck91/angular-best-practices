import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    // Only import what we need from material
    MatTableModule
  ],
  exports: [
    ClientListComponent
  ],
})
export class ClientListModule { }
