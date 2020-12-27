import { isGeneratedFile } from "@angular/compiler/src/aot/util";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
import { Product } from "src/app/model/product";
import { ProductService } from "src/app/services/product/product.service";

export class StoreShoppingCart {
  public products: Product[] = [];

  public add(product: Product) {
    var productLocalStorage = localStorage.getItem("productLocalStorage");
    if (!productLocalStorage) {
      // if localStorage is empty
      this.products.push(product);
      localStorage.setItem(
        "productLocalStorage",
        JSON.stringify(this.products)
      );
    } else {
      this.products = JSON.parse(productLocalStorage);
      this.products.push(product);
      localStorage.setItem(
        "productLocalStorage",
        JSON.stringify(this.products)
      );
    }
  }

  public getProducts(): Product[] {
    var productLocalStorage = localStorage.getItem("productLocalStorage");
    if (productLocalStorage) {
      return JSON.parse(productLocalStorage);
    }
  }

  public removeProduct(product: Product) {}
}
