import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product";
import { StoreShoppingCart } from "../shopping-cart/store.shopping.cart.component";

@Component({
  selector: "store-effectuate",
  templateUrl: "./store.effectuate.component.html",
  styleUrls: ["./store.effectuate.component.css"],
})
export class StoreEffectuateComponent implements OnInit {
  public shoppingCart: StoreShoppingCart;
  public products: Product[];

  ngOnInit(): void {
    this.shoppingCart = new StoreShoppingCart();
    this.products = this.shoppingCart.getProducts();
  }
}
