import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "store-app-product",
  templateUrl: "./store.product.component.html",
  styleUrls: ["./store.product.component.css"],
})
export class StoreProductComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private productService: ProductService) {}
}
