import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from 'src/model/vendor.class';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class VendorService {
    url: string = "http://localhost:8080/vendors";

    constructor(private http: HttpClient) { }

    list(): Observable<Vendor> {
        return this.http.get(this.url) as Observable<Vendor>;
    }

    get(id: number): Observable<Vendor> {
        return this.http.get(this.url + id) as Observable<Vendor>;
    }
      
    save(vendor: Vendor): Observable<Vendor> {
        return this.http.post(this.url, vendor) as Observable<Vendor>;
    }
    
    update(vendor: Vendor): Observable<Vendor> {
        return this.http.put(this.url, vendor) as Observable<Vendor>;
    }
      
    delete(id: number): Observable<Vendor> {
        return this.http.delete(this.url + id) as Observable<Vendor>;
    }
}