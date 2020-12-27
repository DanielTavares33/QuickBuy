import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/model/product";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "app-store",
  templateUrl: "./store.search.component.html",
  styleUrls: ["./store.search.component.css"],
})
export class StoreSearchComponent implements OnInit {
  public products: Product[];

  ngOnInit(): void {}

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAllProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (e) => {
        console.log(e.error);
      }
    );
  }

  openProduct(product: Product) {
    sessionStorage.setItem("productDetail", JSON.stringify(product));
    this.router.navigate(["/store-product"]);
  }
}
