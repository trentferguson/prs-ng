import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/model/product.class';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class ProductService {
    url: string = "http://localhost:8080/products";

    constructor(private http: HttpClient) { }

    list(): Observable<Product> {
        return this.http.get(this.url) as Observable<Product>;
    }

    get(id: number): Observable<Product> {
        return this.http.get(this.url + "/" + id) as Observable<Product>;
    }
      
    save(product: Product): Observable<Product> {
        return this.http.post(this.url, product) as Observable<Product>;
    }
    
    update(product: Product): Observable<Product> {
        return this.http.put(this.url, product) as Observable<Product>;
    }
      
    delete(id: number): Observable<Product> {
        return this.http.delete(this.url + "/" + id) as Observable<Product>;
    }

}