import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { TruncateModule } from "ng2-truncate";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./user/login/login.component";
import { SaveRoutes } from "./authorization/save.routes";
import { UserService } from "./services/user/user.service";
import { SignupUserComponent } from "./user/signup/signup.user.component";
import { ProductService } from "./services/product/product.service";
import { SearchProductComponent } from "./product/search/search.product.component";
import { StoreSearchComponent } from "./store/search/store.search.component";
import { StoreProductComponent } from "./store/product/store.product.component";
import { StoreCheckoutComponent } from "./store/checkout/store.checkout.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    SignupUserComponent,
    SearchProductComponent,
    StoreSearchComponent,
    StoreProductComponent,
    StoreCheckoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    TruncateModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      {
        path: "product",
        component: ProductComponent,
        canActivate: [SaveRoutes],
      },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupUserComponent },
      {
        path: "search-product",
        component: SearchProductComponent,
        canActivate: [SaveRoutes],
      },
      { path: "store-product", component: StoreProductComponent },
      {
        path: "store-checkout",
        component: StoreCheckoutComponent,
        canActivate: [SaveRoutes],
      },
    ]),
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
