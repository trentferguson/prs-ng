import { Component } from "@angular/core";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent {
    pageTitle: string = "Product List"
    products: any[] = [
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
            },
            {
                "id": 2,
                "name": "Portal Gun",
                "price": 1999.99,
                "unit": "each",
                "photoPath": null,
                "vendor": {
                    "id": 2,
                    "code": "CODE-0303",
                    "name": "Aperture Laboratories",
                    "address": "213 Portal Avenue",
                    "city": "Hollywood",
                    "state": "CA",
                    "zip": "33004",
                    "email": "contact@aplabs.com"
                },
                "partNbr": "APL-067"
            },
            {
                "id": 3,
                "name": "Portal Gun",
                "price": 1999.99,
                "unit": "each",
                "photoPath": null,
                "vendor": {
                    "id": 2,
                    "code": "CODE-0303",
                    "name": "Aperture Laboratories",
                    "address": "213 Portal Avenue",
                    "city": "Hollywood",
                    "state": "CA",
                    "zip": "33004",
                    "email": "contact@aplabs.com"
                },
                "partNbr": "APL-067"
            }
    ]
}