import { Component } from "@angular/core";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent {
    pageTitle: string = "User Edit";
    user: any = 
        {
            "id": 1,
            "username": "admin",
            "password": "password",
            "firstName": "Bulby",
            "lastName": "Saur",
            "phone": "5135551234",
            "email": "admin@bulbasaur.com",
            "admin": true,
            "reviewer": true
        };
}