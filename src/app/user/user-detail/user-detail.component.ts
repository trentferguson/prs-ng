import { Component } from "@angular/core";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent {
    pageTitle: string = "User Detail";
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