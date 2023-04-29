import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent {
    pageTitle: string = "Vendor List";
    vendors: any[] = [
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
    ];
}