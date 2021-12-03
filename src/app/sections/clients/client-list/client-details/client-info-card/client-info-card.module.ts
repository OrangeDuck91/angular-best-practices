import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoCardComponent } from './client-info-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ClientInfoCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ClientInfoCardComponent
  ],
})
export class ClientInfoCardModule { }
