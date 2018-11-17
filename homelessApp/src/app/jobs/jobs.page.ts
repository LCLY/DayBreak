import { Component, ViewChild } from "@angular/core";

@Component({
	selector: "app-jobs",
	templateUrl: "jobs.page.html",
	styleUrls: ["jobs.page.scss"],
})
export class JobsPage {
	items = [
		"Star Fox",
		"Tetris",
		"Donkey Kong III",
		"GoldenEye 007",
		"Doom",
		"Fallout",
		"GTA",
		"Halo",
	];

	constructor() {}

	ngOnInit() {}

	itemSelected(item: string) {
		console.log("Selected Item", item);
	}
}
