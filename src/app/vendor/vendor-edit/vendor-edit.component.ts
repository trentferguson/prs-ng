import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";

@Component({
    selector: 'app-vendor-edit',
    templateUrl: './vendor-edit.component.html',
    styleUrls: ['./vendor-edit.component.css']
})

export class VendorEditComponent implements OnInit{
    pageTitle: string = "Vendor Edit";
    vendor: Vendor = new Vendor();
    id: number;

    constructor(
        private vendorService: VendorService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.vendorService.get(this.id).subscribe(j => this.vendor = j as Vendor);
    }
}