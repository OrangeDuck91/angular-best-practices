import { ClientDetailsComponent } from "./client-list/client-details/client-details.container";
import { ClientsComponent } from "./clients.container";

export const clientRoutes = [
    {
        path: "",
        component: ClientsComponent
    },
    {
        path: ":clientId",
        component: ClientDetailsComponent
    },
]