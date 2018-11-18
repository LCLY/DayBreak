import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
	constructor(public alertController: AlertController) {}

	async presentAlert() {
		const alert = await this.alertController.create({
			header: "DayBreak",
			subHeader: "Welcome, DayBreaker!",
			message: "Choose a filter to start using the app",
			buttons: ["OK"],
		});

		await alert.present();
	}

	ngOnInit() {
		document.getElementById("background").style.filter = "brightness(30%)";
		this.presentAlert();
	}

	enable() {
		document.getElementById("background").style.filter = "brightness(100%)";
	}
}
