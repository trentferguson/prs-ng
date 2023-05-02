import { Component, OnInit } from "@angular/core";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.css']
})

export class VendorDetailComponent implements OnInit {
    pageTitle: string = "Vendor Detail";
    vendor: Vendor = new Vendor ();
    id: number;

    constructor(
        private vendorService: VendorService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.vendorService.get(this.id).subscribe(j => this.vendor = j as Vendor);
    }
}