import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { StoreShoppingCart } from '../store/shopping-cart/store.shopping.cart.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  public shoppingcart: StoreShoppingCart;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.shoppingcart = new StoreShoppingCart();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public userLogged(): boolean {
    return this.userService.user_authenticated();
  }

  public user_admin(): boolean {
    return this.userService.user_admin();
  }

  exitLogin() {
    this.userService.clean_session();
    this.router.navigate(['/']);
  }

  get user() {
    return this.userService.user
  }

  public shoppingCartItems(): boolean {
    return this.shoppingcart.shoppingCartItems();
  }
}
