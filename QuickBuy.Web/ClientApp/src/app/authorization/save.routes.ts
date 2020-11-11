import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SaveRoutes implements CanActivate{
    

    constructor(private router: Router){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        var authenticated = localStorage.getItem("user-authenticated")
        if (authenticated == "1") {
            return true;
        }
        this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}});
        // if user is authenticated
        return false;
    }
    
}