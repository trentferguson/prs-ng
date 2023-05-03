import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/service/user.service";
import { Request } from "src/model/request.class";
import { RequestService } from "src/app/service/request.service";

@Component({
    selector: 'app-request-review',
    templateUrl: './request-review.component.html',
    styleUrls: ['./request-review.component.css']
})

export class RequestReviewComponent implements OnInit{
    pageTitle: string = "Request Review";
    requests: Request[] = [];
    user: User = new User();
    userid: number;

    constructor(
        private requestService: RequestService,
        private userService: UserService
    ) {}
    
    ngOnInit(): void {
        //get  the id of the logged in  user
        this.userService.get(this.userid).subscribe(j => this.user = j as User);

        //get list of all requests for review
        this.requestService
    }
}