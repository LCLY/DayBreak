import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
	{
		path: "jobDetails",
		loadChildren: "./job-details/job-details.module#JobDetailsPageModule",
	},
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
