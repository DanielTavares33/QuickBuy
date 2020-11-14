import {Component} from "@angular/core";
import { User } from "src/app/model/user";
import {Router} from "@angular/router";

@Component({
    selector: "app-login", 
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {
    public user;
    public userAuthentication: boolean;

    constructor(private router: Router) {
        this.user = new User();
    }
    
    login(){
        if (this.user.email == "dantavper@hotmail.com" && this.user.password == "123") {
            sessionStorage.setItem("user-authenticated","1");
            this.router.navigate(['/'])
        }

    }
        
}