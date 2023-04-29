import { Component } from "@angular/core";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
    pageTitle: string = "User List";
    users: any[] = [
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
        },
        {
            "id": 2,
            "username": "kblakley",
            "password": "password",
            "firstName": "Katie",
            "lastName": "Blakley",
            "phone": "5135556512",
            "email": "kblakley@gmail.com",
            "admin": false,
            "reviewer": false
        },
        {
            "id": 6,
            "username": "cameronicus",
            "password": "test",
            "firstName": "Cameron",
            "lastName": "Mower",
            "phone": "5135551424",
            "email": "123@gmail.com",
            "admin": true,
            "reviewer": true
        },
        {
            "id": 7,
            "username": "asdfasdf",
            "password": "password",
            "firstName": "ff",
            "lastName": "ff",
            "phone": "5135556512",
            "email": "kblakley@gmail.com",
            "admin": false,
            "reviewer": false
        },
        {
            "id": 12,
            "username": "lillith",
            "password": "remy123",
            "firstName": "Lill",
            "lastName": "Verzella",
            "phone": "5135556512",
            "email": "lilliv@gmail.com",
            "admin": false,
            "reviewer": false
        }
    ];
}