import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.container';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { ClientListModule } from './client-list/client-list.module';

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ClientListModule
  ]
})
export class ClientsModule { }
