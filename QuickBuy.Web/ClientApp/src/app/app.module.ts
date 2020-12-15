import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./user/login/login.component";
import { SaveRoutes } from "./authorization/save.routes";
import { UserService } from "./services/user/user.service";
import { SignupUserComponent } from "./user/signup/signup.user.component";
import { ProductService } from "./services/product/product.service";
import { SearchProductComponent } from "./product/search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    SignupUserComponent,
    SearchProductComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "product", component: ProductComponent },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupUserComponent },
      { path: "search-product", component: SearchProductComponent },
    ]),
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

// { path: 'product', component: ProductComponent, canActivate:[SaveRoutes] },
