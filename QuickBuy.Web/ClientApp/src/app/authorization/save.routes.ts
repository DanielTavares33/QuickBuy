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
        //this.router.navigate(['/login']);
        // if user is authenticated
        return true;
    }
    
}