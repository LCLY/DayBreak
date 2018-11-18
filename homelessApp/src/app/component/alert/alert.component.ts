import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
@Component({
    selector: "app-alert",
    templateUrl: "./alert.component.html",
    styleUrls: ["./alert.component.scss"],
})
export class AlertComponent implements OnInit {
    constructor(public alertController: AlertController) {}
    ngOnInit() {}

    async presentAlert() {
        const alert = await this.alertController.create({
            header: "Alert",
            subHeader: "Subtitle",
            message: "This is an alert message.",
            buttons: ["OK"],
        });

        await alert.present();
    }
}
