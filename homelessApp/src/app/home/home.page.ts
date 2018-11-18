import { Component, OnInit } from "@angular/core";
@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
    ngOnInit() {
        document.getElementById("background").style.filter = "brightness(30%)";
        // document.getElementById("background").style.opacity = "5";
    }

    enable() {
        document.getElementById("background").style.filter = "brightness(100%)";
    }
}
