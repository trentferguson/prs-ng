import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from 'src/model/line-item.class';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class LineItemService {
    url: string = "http://localhost:8080/request-lines";

    constructor(private http: HttpClient) { }

    list(): Observable<LineItem> {
        return this.http.get(this.url) as Observable<LineItem>;
    }

    get(id: number): Observable<LineItem> {
        return this.http.get(this.url + "/" + id) as Observable<LineItem>;
    }
      
    save(lineItem: LineItem): Observable<LineItem> {
        return this.http.post(this.url, lineItem) as Observable<LineItem>;
    }
    
    update(lineItem: LineItem): Observable<LineItem> {
        return this.http.put(this.url, lineItem) as Observable<LineItem>;
    }
    
    delete(id: number): Observable<LineItem> {
        return this.http.delete(this.url + id) as Observable<LineItem>;
    }
}