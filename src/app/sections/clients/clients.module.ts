import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.container';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { ClientListModule } from './client-list/client-list.module';
import { RouterModule } from '@angular/router';
import { clientRoutes } from './clients.route';

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ClientListModule,
    RouterModule.forChild(clientRoutes),
  ]
})
export class ClientsModule { }
