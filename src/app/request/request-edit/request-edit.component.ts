import { Component, OnInit } from "@angular/core";
import { Request } from "src/model/request.class";
import { RequestService } from "src/app/service/request.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/model/user.class";
import { UserService } from "src/app/service/user.service";
import { LineItem } from "src/model/line-item.class";

@Component({
    selector: 'app-request-edit',
    templateUrl: './request-edit.component.html',
    styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent implements OnInit {
    pageTitle: string = "Request Edit";
    request: Request = new Request();
    lineItems: LineItem[] = [];
    id: number;

    constructor(
        private requestService: RequestService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.requestService.getRequest(this.id).subscribe(j => this.request = j as Request);
    }
}