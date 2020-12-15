import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "search-product",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchProductComponent implements OnInit {
  public products: Product[];
  ngOnInit(): void {}

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (e) => {
        console.log(e.error);
      }
    );
  }
}
