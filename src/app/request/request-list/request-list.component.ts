import { Component, OnInit } from "@angular/core";
import { Request } from "src/model/request.class";
import { RequestService } from "src/app/service/request.service";

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit{
    pageTitle: string = "Request List";
    requests: Request[] = [];

    constructor(
        private requestService: RequestService
    ) {}

    ngOnInit(): void {
        this.requestService.listRequests().subscribe(j => {
            this.requests = j as unknown as Request[];
        })
    }
}