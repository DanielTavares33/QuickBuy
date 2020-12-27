import { Product } from "src/app/model/product";

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
      // if localStorage have more then one value
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
