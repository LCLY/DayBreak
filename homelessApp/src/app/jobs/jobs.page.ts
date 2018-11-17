import { Component, ViewChild } from "@angular/core";

@Component({
	selector: "app-jobs",
	templateUrl: "jobs.page.html",
	styleUrls: ["jobs.page.scss"],
})
export class JobsPage {
	items = ["Star Fox", "Tetris"];
	items1 = ["Star Fox", "Tetris", "Tetris"];
	items2 = ["Star Fox", "Tetris", "Tetris"];

	constructor() {}

	ngOnInit() {}

	itemSelected(item: string) {
		console.log("Selected Item", item);
	}
}
