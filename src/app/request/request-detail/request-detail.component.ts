import { Component } from "@angular/core";

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})

export class RequestDetailComponent {
    pageTitle: string = "Request Detail";
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
}