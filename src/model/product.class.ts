import { Vendor } from './vendor.class';

export class Product {
    id: number;
    vendor: Vendor;
    partNbr: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

    constructor (id: number = 0, vendor: Vendor = null, partNbr: string = "",
        name: string = "", price: number = 0, unit: string = "", photoPath: string = ""){
            this.id = id;
            this.vendor = vendor;
            this.partNbr = partNbr;
            this.name = name;
            this.price = price;
            this.unit = unit;
            this.photoPath = photoPath;
    }
}