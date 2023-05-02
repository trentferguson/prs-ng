import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { LineItem } from "src/model/line-item.class";

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})

export class RequestDetailComponent {
    pageTitle: string = "Request Detail";
    request: Request = new Request();
    lineItem: LineItem = new LineItem();
}