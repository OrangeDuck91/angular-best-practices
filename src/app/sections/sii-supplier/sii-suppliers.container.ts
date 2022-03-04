import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SiiSupplier } from './model/sii-supplier.model';
import { SiiSupplierService } from './service/sii-supplier.service';

@Component({
    selector: 'app-sii-suppliers',
    templateUrl: './sii-suppliers.container.html',
    styleUrls: ['./sii-suppliers.container.css']
})
export class SiiSuppliersComponent implements OnInit {

    public siiSuppliers: Observable<SiiSupplier[]>;

    constructor(
        private siiSupplierService: SiiSupplierService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.siiSuppliers = this.siiSupplierService.getAllSiiSuppliers();
    }


    goToDetail(row: SiiSupplier) {
        console.log('row', row);
        this.router.navigate([`SiiSuppliers/${row.id}`])
    }

}
