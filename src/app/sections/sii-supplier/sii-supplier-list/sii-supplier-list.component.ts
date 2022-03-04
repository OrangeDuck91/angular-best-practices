import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SiiSupplier } from '../model/sii-supplier.model';

@Component({
    selector: 'app-sii-supplier-list',
    templateUrl: './sii-supplier-list.component.html',
    styleUrls: ['./sii-supplier-list.component.css']
})
export class SiiSupplierListComponent {

    @Input()
    siiSuppliers: SiiSupplier[];

    @Output()
    siiSupplierSelected = new EventEmitter<SiiSupplier>();

    displayedColumns: string[] = ['name'];

    selectSiiSupplier(SiiSupplier: SiiSupplier) {
        this.siiSupplierSelected.emit(SiiSupplier);
    }

}
