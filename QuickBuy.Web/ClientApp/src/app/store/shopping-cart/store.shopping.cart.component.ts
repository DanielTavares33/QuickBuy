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

    return this.products;
  }

  public removeProduct(product: Product) {
    var productLocalStorage = localStorage.getItem("productLocalStorage");

    if (productLocalStorage) {
      this.products = JSON.parse(productLocalStorage);
      this.products = this.products.filter((p) => p.id != product.id);
      localStorage.setItem(
        "productLocalStorage",
        JSON.stringify(this.products)
      );
    }
  }

  public update(products: Product[]) {
    localStorage.setItem("productLocalStorage", JSON.stringify(products));
  }

  public shoppingCartItems(): boolean {
    var items = this.getProducts();

    return items.length > 0 ? true : false;
  }

  public cleanShoppingCart() {
    localStorage.setItem("productLocalStorage", "");
  }
}
