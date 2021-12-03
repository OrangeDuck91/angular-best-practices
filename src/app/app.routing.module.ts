import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupplierListComponent } from "./components/suppliers/supplier-list/supplier-list.component";
import { ClientDetailsComponent } from "./sections/clients/client-list/client-details/client-details.container";
import { ClientsComponent } from "./sections/clients/clients.container";
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
        component: ClientsComponent
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