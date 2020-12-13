import { Component, OnInit } from "@angular/core";
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

  constructor(private productService: ProductService) {}

  public inputChange(files: FileList) {
    this.selectedFile = files.item(0);
    this.active_spinner = true;

    this.productService.sendFile(this.selectedFile).subscribe(
      (fileName) => {
        this.product.fileName = fileName;
        alert(this.product.fileName);
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
    this.productService.registerProduct(this.product).subscribe(
      (productJson) => {
        this.productService.registerProduct(productJson);
      },
      (err) => {
        console.log(err.error);
        this.message = err.error;
        this.active_spinner = false;
      }
    );
  }
}
