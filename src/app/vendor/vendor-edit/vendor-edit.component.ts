import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-edit',
    templateUrl: './vendor-edit.component.html',
    styleUrls: ['./vendor-edit.component.css']
})

export class VendorEditComponent {
    pageTitle: string = "Vendor Edit";
    vendor: any = 
    {
        "id": 1,
        "code": "CODE-0076",
        "name": "Nuka Cola",
        "address": "76 Commonwealth Drive",
        "city": "Boston",
        "state": "MA",
        "zip": "02108",
        "email": "support@NukaCola.com"
    }
}