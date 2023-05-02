import { Component } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
    pageTitle: string = "User Login";
}