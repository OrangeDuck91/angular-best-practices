import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
  ],
  exports: [
    DefaultComponent
  ],
})
export class DefaultModule { }
