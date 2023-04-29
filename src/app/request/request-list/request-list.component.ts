import { Component } from "@angular/core";

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.css']
})

export class RequestListComponent {
    pageTitle: string = "Request List";
    requests: any[] = [
        {
            "id": 1,
            "description": "test request test",
            "justification": "test",
            "rejectionReason": "test",
            "deliveryMode": "test",
            "submittedDate": "2023-01-18T00:00:00",
            "dateNeeded": "2023-01-18T00:00:00",
            "status": "APPROVED",
            "total": 9.99,
            "user": {
                "id": 1,
                "username": "admin",
                "password": "password",
                "firstName": "Bulby",
                "lastName": "Saur",
                "phone": "5135551234",
                "email": "admin@bulbasaur.com",
                "admin": true,
                "reviewer": true
            }
        },
        {
            "id": 2,
            "description": "super fun request",
            "justification": "fun",
            "rejectionReason": "fun",
            "deliveryMode": "fun",
            "submittedDate": "2023-01-18T00:00:00",
            "dateNeeded": "2023-01-18T00:00:00",
            "status": "NEW",
            "total": 29.99,
            "user": {
                "id": 2,
                "username": "kblakley",
                "password": "password",
                "firstName": "Katie",
                "lastName": "Blakley",
                "phone": "5135556512",
                "email": "kblakley@gmail.com",
                "admin": false,
                "reviewer": false
            }
        }
    ];
}