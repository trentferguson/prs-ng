import { Component } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/service/user.service";

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent {
    pageTitle: string = "User Create";
}