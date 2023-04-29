import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.css']
})

export class VendorDetailComponent {
    pageTitle: string = "Vendor Detail";
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