import { Component } from "@angular/core";
import { Vendor } from "src/model/vendor.class";

@Component({
    selector: 'app-vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.css']
})

export class VendorDetailComponent {
    pageTitle: string = "Vendor Detail";
    vendor: Vendor = new Vendor ();
}