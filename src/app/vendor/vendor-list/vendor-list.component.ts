import { Component, OnInit } from "@angular/core";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";

@Component({
    selector: 'app-vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {
    pageTitle: string = "Vendor List";
    vendors: Vendor[] = [];

    constructor(
        private vendorService: VendorService
    ) {}

    ngOnInit() {
        this.vendorService.list().subscribe(jr => {
            this.vendors = jr as unknown as Vendor[];
          });
    }
}