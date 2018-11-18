/* Module imports */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
/* Component imports */
import { AlertComponent } from "./alert/alert.component";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule.forRoot()],
    declarations: [AlertComponent],
    entryComponents: [AlertComponent],
    exports: [AlertComponent],
})
export class ComponentsModule {}
