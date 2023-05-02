import { Component } from "@angular/core";
import { Product } from "src/model/product.class";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
    product: Product = new Product();
}