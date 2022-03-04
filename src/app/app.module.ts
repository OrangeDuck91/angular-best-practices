import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { EmployeesModule } from './sections/employees/employees.module';
import { EmployeeDetailsModule } from './sections/employees/employee-list/employee-details/employee-details.module';
import { ClientsModule } from './sections/clients/clients.module';
import { ClientDetailsModule } from './sections/clients/client-list/client-details/client-details.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SiiSuppliersModule } from './sections/sii-supplier/sii-suppliers.module';
import { DefaultModule } from './shared/components/default/default.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    // Temp before lazy loading
    EmployeesModule,
    EmployeeDetailsModule,
    ClientsModule,
    ClientDetailsModule,
    SiiSuppliersModule,
    // The only modules we needed ----> MatListModule, MatSidenavModule <----
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
