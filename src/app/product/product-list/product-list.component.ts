import { Component, OnInit } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/service/product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List"
    products: Product[] = [];

    constructor(
        private productService: ProductService
    ) {}
    
    ngOnInit(): void {
        this.productService.list().subscribe(j => {
            this.products = j as unknown as Product[];
        })
    }
}