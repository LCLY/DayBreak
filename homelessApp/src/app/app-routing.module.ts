import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
	{
		path: "jobDetails",
		loadChildren: "./job-details/job-details.module#JobDetailsPageModule",
	},
  { path: 'upcoming-events', loadChildren: './upcoming-events/upcoming-events.module#UpcomingEventsPageModule' },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
