import { Routes } from "@angular/router";
import { ClientDetailsComponent } from "./client-list/client-details/client-details.container";
import { ClientsComponent } from "./clients.container";

export const clientRoutes: Routes = [
    {
        path: "",
        component: ClientsComponent
    },
    {
        path: ":clientId",
        component: ClientDetailsComponent
    },
]