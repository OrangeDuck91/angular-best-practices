import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientDetailsComponent } from "./sections/clients/client-list/client-details/client-details.container";
import { ClientsComponent } from "./sections/clients/clients.container";
import { EmployeeDetailsComponent } from "./sections/employees/employee-list/employee-details/employee-details.container";
import { EmployeesComponent } from "./sections/employees/employees.container";
import { SiiSuppliersComponent } from "./sections/sii-supplier/sii-suppliers.container";
import { DefaultComponent } from "./shared/components/default/default.component";

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
        loadChildren: () =>
            import('~sections/clients/clients.module').then((m) => m.ClientsModule)
    },
    {
        path: "suppliers",
        component: SiiSuppliersComponent
    },
    {
        path: "default",
        component: DefaultComponent
    },
    {
        path: "",
        redirectTo: "employees",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "default",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { anchorScrolling: "enabled" })],
    exports: [RouterModule]
})
export class AppRoutingModule { }