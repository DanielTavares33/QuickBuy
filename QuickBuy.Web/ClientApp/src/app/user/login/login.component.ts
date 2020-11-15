import {Component, OnInit} from "@angular/core";
import { User } from "src/app/model/user";
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: "app-login", 
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{
    public user;
    public userAuthentication: boolean;
    public returnUrl: string;

    constructor(private router: Router, private activatedRouter: ActivatedRoute, private userService: UserService) {
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.user = new User();
    }

    login(){

        this.userService.verifyUser(this.user).subscribe();

        // if (this.user.email == "dantavper@hotmail.com" && this.user.password == "123") {
        //     sessionStorage.setItem("user-authenticated","1");
        //     this.router.navigate([this.returnUrl])
        // }

    }
        
}