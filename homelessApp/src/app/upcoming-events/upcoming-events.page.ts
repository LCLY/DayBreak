import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-upcoming-events",
	templateUrl: "./upcoming-events.page.html",
	styleUrls: ["./upcoming-events.page.scss"],
})
export class UpcomingEventsPage implements OnInit {
	items = ["Star Fox", "Tetris", , "Tetris"];
	items1 = ["Star Fox", "Tetris", "Tetris"];
	items2 = ["Star Fox", "Tetris", "Tetris"];

	constructor() {}

	ngOnInit() {}

	itemSelected(item: string) {
		console.log("Selected Item", item);
	}
}
