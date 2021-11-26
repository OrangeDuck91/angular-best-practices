import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedComponentsModule { }
/**
 * Same thing as MaterialModule, you'll have to import the whole Module to use only one of its
 * components. Modules should be coherents, cohesive blocks of components that are always used together.
 */