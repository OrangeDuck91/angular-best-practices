import { Routes } from "@angular/router";
import { EmployeeDetailsComponent } from "./employee-list/employee-details/employee-details.container";
import { EmployeesComponent } from "./employees.container";

export const employeesRoutes: Routes = [
    {
        path: "",
        component: EmployeesComponent
    },
    {
        path: ":employeeId",
        component: EmployeeDetailsComponent
    },
]