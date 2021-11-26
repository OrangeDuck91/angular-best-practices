import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeDetailComponent } from "./components/employees/employee-detail/employee-detail.component";
import { EmployeeListComponent } from "./components/employees/employee-list/employee-list.component";

export const APP_ROUTES: Routes = [
    {
        path: "employees",
        component: EmployeeListComponent
    },
    {
        path: "employees/:employeeId",
        component: EmployeeDetailComponent
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