import { Component } from "@angular/core";

@Component({
    selector: 'app-request-edit',
    templateUrl: './request-edit.component.html',
    styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent {
    pageTitle: string = "Request Edit";
    request: any = 
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
    }

    lineItem: any = 
    {
        "id": 1,
        "request": {
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
        "product": {
            "id": 1,
            "name": "Nuka Cola Quantum",
            "price": 11.99,
            "unit": "each",
            "photoPath": null,
            "vendor": {
                "id": 1,
                "code": "CODE-0076",
                "name": "Nuka Cola",
                "address": "76 Commonwealth Drive",
                "city": "Boston",
                "state": "MA",
                "zip": "02108",
                "email": "support@NukaCola.com"
            },
            "partNbr": "NC-0023"
        },
        "quantity": 555
    }
}