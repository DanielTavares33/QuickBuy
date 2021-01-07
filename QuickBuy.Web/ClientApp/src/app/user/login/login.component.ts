import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    public user;
    public userAuthentication: boolean;
    public returnUrl: string;
    public message: string;
    private active_spinner: boolean;

    constructor(private router: Router, private activatedRouter: ActivatedRoute, private userService: UserService) {
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.user = new User();
    }

    login() {
        this.active_spinner = true;
        this.userService.verifyUser(this.user).subscribe(
            user_json => {
                this.userService.user = user_json;

                if (this.returnUrl == null) {
                    this.router.navigate(['/'])
                } else {
                    this.router.navigate([this.returnUrl]);
                }
            },
            err => {
                this.message = err.error;
                this.active_spinner = false;
            }
        );
    }

}