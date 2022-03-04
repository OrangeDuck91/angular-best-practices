import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiiSuppliersComponent } from './sii-suppliers.container';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { SiiSupplierListModule } from './sii-supplier-list/sii-supplier-list.module';
import { RouterModule } from '@angular/router';
import { siiSupplierRoutes } from './sii-supplier.route';

@NgModule({
    declarations: [
        SiiSuppliersComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        SiiSupplierListModule,
        RouterModule.forChild(siiSupplierRoutes)
    ]
})
export class SiiSuppliersModule { }
