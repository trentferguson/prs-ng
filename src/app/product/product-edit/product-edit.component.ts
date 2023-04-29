import { Component } from "@angular/core";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent {
    pageTitle: string = "Product Edit";
    product: any =
    {
        "id": 1,
        "name": "Nuka Cola Quantum",
        "price": 11.99,
        "unit": "each",
        "photoPath": null,
        "partNbr": "NC-0023",
        "vendor": {
            "id": 1,
            "code": "CODE-0076",
            "name": "Nuka Cola",
            "address": "76 Commonwealth Drive",
            "city": "Boston",
            "state": "MA",
            "zip": "02108",
            "email": "support@NukaCola.com"
        }
    };
}