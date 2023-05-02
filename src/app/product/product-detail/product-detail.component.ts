import { Component, OnInit } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/service/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: Product = new Product();
    id: number;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.productService.get(this.id).subscribe(j => this.product = j as Product);
    }
}