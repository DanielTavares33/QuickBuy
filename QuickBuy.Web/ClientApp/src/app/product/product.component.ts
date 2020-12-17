import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../model/product";
import { ProductService } from "../services/product/product.service";

@Component({
  selector: "app-produto", //tag where the ProductComponent is rendered
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  public product: Product;
  public selectedFile: File;
  public active_spinner: boolean;
  public message: string;

  constructor(private productService: ProductService, private router: Router) {}

  // this method is to send the image of the product
  public inputChange(files: FileList) {
    this.selectedFile = files.item(0);
    this.active_spinner = true;

    this.productService.sendFile(this.selectedFile).subscribe(
      (fileName) => {
        this.product.fileName = fileName;
        this.active_spinner = false;
      },
      (e) => {
        console.log(e.error);
      }
    );
  }

  ngOnInit(): void {
    this.product = new Product();
  }

  public registerProduct() {
    this.activeAwait();
    this.productService.registerProduct(this.product).subscribe(
      (productJson) => {
        this.productService.registerProduct(productJson);
        this.deactivateAwait();
        this.router.navigate(["/search-product"]);
      },
      (err) => {
        console.log(err.error);
        this.message = err.error;
        this.deactivateAwait();
      }
    );
  }

  public activeAwait() {
    this.active_spinner = true;
  }

  public deactivateAwait() {
    this.active_spinner = false;
  }
}
