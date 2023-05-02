import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd } from "@angular/router";
import { UserService } from "src/app/service/user.service";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
    pageTitle: string = "User Detail";
    user: User = new User();
    id: number;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.userService.get(this.id).subscribe(jr => this.user = jr as User);
    }
}