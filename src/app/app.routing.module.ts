import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientDetailsComponent } from "./components/clients/client-details/client-details.component";
import { ClientListComponent } from "./components/clients/client-list/client-list.component";
import { SupplierListComponent } from "./components/suppliers/supplier-list/supplier-list.component";
import { EmployeeDetailsComponent } from "./sections/employees/employee-list/employee-details/employee-details.container";
import { EmployeesComponent } from "./sections/employees/employees.container";

export const APP_ROUTES: Routes = [
    {
        path: "employees",
        component: EmployeesComponent
    },
    {
        path: "employees/:employeeId",
        component: EmployeeDetailsComponent
    },
    {
        path: "clients",
        component: ClientListComponent
    },
    {
        path: "clients/:clientId",
        component: ClientDetailsComponent
    },
    {
        path: "suppliers",
        component: SupplierListComponent
    },
    {
        path: "",
        redirectTo: "employees",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "employees",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { anchorScrolling: "enabled" })],
    exports: [RouterModule]
})
export class AppRoutingModule { }