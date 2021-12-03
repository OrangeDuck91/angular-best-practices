import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from './client-details.container';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { AddressModule } from 'src/app/shared/components/address/address.module';
import { ClientInfoCardModule } from './client-info-card/client-info-card.module';



@NgModule({
  declarations: [
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    AddressModule,
    ClientInfoCardModule
  ]
})
export class ClientDetailsModule { }
