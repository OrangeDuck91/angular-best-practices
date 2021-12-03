import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [AddressComponent],
})
export class AddressModule { }
