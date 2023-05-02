import { Component, OnInit } from "@angular/core";
import { Request } from "src/model/request.class";
import { LineItem } from "src/model/line-item.class";
import { RequestService } from "src/app/service/request.service";
import { LineItemService } from "src/app/service/line-item.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})

export class RequestDetailComponent implements OnInit {
    pageTitle: string = "Request Detail";
    request: Request = new Request();
    lineItems: LineItem[] = [];
    id: number;

    constructor(
        private requestService: RequestService,
        private lineItemService: LineItemService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.requestService.getRequest(this.id).subscribe(j => this.request = j as Request);
        this.lineItemService.list(this.id).subscribe(j => this.lineItems = j as unknown as LineItem[]);
    }
}