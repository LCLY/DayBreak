import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { HomePage } from "../home/home.page";
import { JobsPage } from "../jobs/jobs.page";
import { ContactPage } from "../contact/contact.page";

const routes: Routes = [
    {
        path: "tabs",
        component: TabsPage,
        children: [
            {
                path: "",
                redirectTo: "/tabs/(home:home)",
                pathMatch: "full",
            },
            {
                path: "home",
                outlet: "home",
                component: HomePage,
            },
            {
                path: "jobs",
                outlet: "jobs",
                component: JobsPage,
            },
            {
                path: "contact",
                outlet: "contact",
                component: ContactPage,
            },
        ],
    },
    {
        path: "",
        redirectTo: "/tabs/(home:home)",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
