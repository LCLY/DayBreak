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
			message: "You may start exploring the app by choosing a filter",
			buttons: ["OK"],
		});

		await alert.present();
	}

	ngOnInit() {
		document.getElementById("background").style.filter = "brightness(30%)";
		document
			.getElementById("background")
			.setAttribute("src", "../../assets/img/map/demomap.jpg");
		this.presentAlert();
	}

	enable() {
		document.getElementById("background").style.filter = "brightness(100%)";
	}

	pizza() {
		document.getElementById("background").style.filter = "brightness(100%)";
		document
			.getElementById("background")
			.setAttribute("src", "../../assets/img/map/foodmap.jpg");
	}

	home() {
		document.getElementById("background").style.filter = "brightness(100%)";
		document
			.getElementById("background")
			.setAttribute("src", "../../assets/img/map/sheltermap.jpg");
	}

	medkit() {
		document.getElementById("background").style.filter = "brightness(100%)";
		document
			.getElementById("background")
			.setAttribute("src", "../../assets/img/map/healthmap.jpg");
	}

	shirt() {
		document.getElementById("background").style.filter = "brightness(100%)";
		document
			.getElementById("background")
			.setAttribute("src", "../../assets/img/map/shirtmap.jpg");
	}
	wifi() {
		document.getElementById("background").style.filter = "brightness(100%)";
		document
			.getElementById("background")
			.setAttribute("src", "../../assets/img/map/wifimap.jpg");
	}
}
