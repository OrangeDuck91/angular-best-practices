import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiiSupplierListComponent } from './sii-supplier-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        SiiSupplierListComponent
    ],
    imports: [
        CommonModule,
        MatTableModule
    ],
    exports: [
        SiiSupplierListComponent
    ],
})
export class SiiSupplierListModule { }
