import {Component, OnInit} from "@angular/core";
import { Product } from "../model/product";
import { ProductService } from "../services/product/product.service";

@Component({
    selector: "app-produto", //tag where the ProductComponent is rendered
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})

export class ProductComponent implements OnInit{

    public product: Product
    public selectedFile: File;

    constructor(private productService: ProductService) {
       
    }

    public inputChange(files: FileList){
        this.selectedFile = files.item(0)
        this.productService.sendFile(this.selectedFile).subscribe(
            file => {

            },
            errors => {

            }
        )
    }

    ngOnInit(): void {
        this.product = new Product()
    }

    public registerProduct(){
        this.productService.registerProduct(this.product)
            .subscribe(
                productJson => {
                    console.log(productJson)
                },
                error => {
                    console.log(error.error);
                }
            );
    }
}