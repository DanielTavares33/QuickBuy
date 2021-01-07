import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./store.checkout.success.component.html"
})
export class StoreCheckoutSuccessComponent implements OnInit {
  public requestId: string;

  ngOnInit(): void {
    this.requestId = sessionStorage.getItem("requestId");
  }
}

