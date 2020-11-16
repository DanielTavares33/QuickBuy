import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../services/user/user.service";

@Injectable({
    providedIn: 'root'
})
export class SaveRoutes implements CanActivate{
    

    constructor(private router: Router, private userService: UserService){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // this.userService
        var authenticated = sessionStorage.getItem("user-authenticated")
        if (authenticated == "1") {
            return true;
        }
        this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}});
        // if user is authenticated
        return false;
    }
    
}