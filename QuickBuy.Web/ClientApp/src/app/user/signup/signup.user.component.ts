import {Component, OnInit} from "@angular/core";
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: "signup-user",
    templateUrl: "./signup.user.component.html",
    styleUrls: ["./signup.user.component.css"]
})
export class SignupUserComponent implements OnInit {

    public user: User
    
    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.user = new User()
    }

    public signup(){
        this.userService.signupUser(this.user).subscribe(
            userJson => {

            },
            errors => {

            }
        );
    }
}