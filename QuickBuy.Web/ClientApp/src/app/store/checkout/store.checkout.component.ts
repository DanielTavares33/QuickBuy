import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/model/product";
import { StoreShoppingCart } from "../shopping-cart/store.shopping.cart.component";

@Component({
  selector: "store-checkout",
  templateUrl: "./store.checkout.component.html",
  styleUrls: ["./store.checkout.component.css"],
})
export class StoreCheckoutComponent implements OnInit {
  public shoppingCart: StoreShoppingCart;
  public products: Product[];
  public totalValue: number;

  ngOnInit(): void {
    this.shoppingCart = new StoreShoppingCart();
    this.products = this.shoppingCart.getProducts();
    this.updateTotal();
  }

  constructor(private router: Router) {}

  public updateTotal() {
    // reduce expression:
    // applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
    this.totalValue = this.products.reduce((s, p) => s + p.price, 0);
  }

  public continueShopping() {
    this.router.navigate(["/"]);
  }
}
