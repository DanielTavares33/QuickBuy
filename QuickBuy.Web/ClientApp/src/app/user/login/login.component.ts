import {Component} from "@angular/core";
import { User } from "src/app/model/user";

@Component({
    selector: "app-login", 
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {
    public user;
    public userAuthentication: boolean;

    constructor() {
        this.user = new User();
    }
    
    login(){
        if (this.user.email == "dantavper@hotmail.com" && this.user.password == "123") {
            this.userAuthentication = true;
        }else {
            this.userAuthentication = false;
        }

    }
        
}