import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/model/product";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "store-app-product",
  templateUrl: "./store.product.component.html",
  styleUrls: ["./store.product.component.css"],
})
export class StoreProductComponent implements OnInit {
  public product: Product;

  ngOnInit(): void {
    var productDetail = sessionStorage.getItem("productDetail");
    if (productDetail) {
      this.product = JSON.parse(productDetail);
    }
  }

  constructor(private productService: ProductService, private router: Router) {}

  public buy() {
    this.router.navigate(["/store-effectuate"]);
  }
}
