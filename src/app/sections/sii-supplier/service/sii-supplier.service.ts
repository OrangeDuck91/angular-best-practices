import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  SiiSupplier } from '../model/sii-supplier.model';

const DummySiiSuppliers: SiiSupplier [] =[
    {
        id: 'Test',
        name: 'Test'
    }
]

@Injectable({ providedIn: 'root' })
export class SiiSupplierService {
    constructor() { }

    getAllSiiSuppliers(): Observable < SiiSupplier [] > {
        return of(DummySiiSuppliers)
    }

    getSiiSupplierById(id: string): Observable < SiiSupplier > {
        return of(DummySiiSuppliers.find(e => e.id == id));
    }

}