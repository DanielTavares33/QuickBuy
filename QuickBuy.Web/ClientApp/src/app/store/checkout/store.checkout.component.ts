import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/model/product";
import { StoreShoppingCart } from "../shopping-cart/store.shopping.cart.component";
import { Request } from "../../model/request";
import { UserService } from "src/app/services/user/user.service";
import { ItemRequest } from "src/app/model/itemRequest";
import { RequestService } from "src/app/services/request/request.service";

@Component({
  selector: "store-checkout",
  templateUrl: "./store.checkout.component.html",
  styleUrls: ["./store.checkout.component.css"],
})
export class StoreCheckoutComponent implements OnInit {
  public shoppingCart: StoreShoppingCart;
  public products: Product[];
  public totalValue: number;
  public shippingValue: number;

  ngOnInit(): void {
    this.shoppingCart = new StoreShoppingCart();
    this.products = this.shoppingCart.getProducts();
    this.updateTotal();
    this.estimatedShipping();
  }

  constructor(private router: Router, private userService: UserService, private requestService: RequestService) { }

  public updatePrice(product: Product, quantity: number) {
    if (!product.originalPrice) {
      product.originalPrice = product.price;
    }

    if (quantity <= 0) {
      quantity = 1;
      product.quantityProduct = quantity;
    }
    product.price = product.originalPrice * quantity;
    this.shoppingCart.update(this.products);
    this.updateTotal();
    this.estimatedShipping();
  }

  public deleteCartProduct(product: Product) {
    this.shoppingCart.removeProduct(product);
    this.products = this.shoppingCart.getProducts();
    this.updateTotal();
    this.estimatedShipping();
  }

  public updateTotal() {
    // reduce expression:
    // applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
    this.totalValue = this.products.reduce((s, p) => s + p.price, 0);
  }

  public estimatedShipping() {
    if (this.totalValue <= 200 && this.totalValue != 0) {
      this.shippingValue = 4.49;
      this.totalValue = this.totalValue + this.shippingValue;
    } else if (this.totalValue >= 200) {
      this.shippingValue = 0.0;
      this.updateTotal();
    } else {
      this.shippingValue = 0.0;
      this.updateTotal();
    }
  }

  public createRequest(): Request {
    let request = new Request();
    request.userId = this.userService.user.id;
    request.postalCode = "3700";
    request.address = "Avenida Doutor Renato Araujo";
    request.addressNumber = "253";
    request.city = "São João da Madeira";
    request.district = "Aveiro";
    request.deliveryDateForecast = new Date();
    request.paymentMethodId = 1;

    this.products = this.shoppingCart.getProducts();
    this.products.forEach(product => {
      let itemRequest = new ItemRequest();
      itemRequest.productId = product.id;

      if (!product.quantityProduct) {
        product.quantityProduct = 1;
      }
      itemRequest.quantity = product.quantityProduct;

      request.itemsRequest.push(itemRequest);
    });

    return request;
  }

  public checkoutRequest() {
    this.requestService.checkoutBuy(this.createRequest())
      .subscribe(
        requestId => {
          console.log(requestId);
          sessionStorage.setItem("requestId", requestId.toString());
          this.products = [];
          this.shoppingCart.cleanShoppingCart();

          this.router.navigate(["/checkout-with-success"]);
        },
        e => {
          console.log(e.error);
        }
      );
  }

  public continueShopping() {
    this.router.navigate(["/"]);
  }
}
