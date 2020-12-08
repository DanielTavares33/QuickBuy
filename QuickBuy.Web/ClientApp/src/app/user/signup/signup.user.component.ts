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
    public active_spinner:boolean
    public message: string
    public registeredUser: boolean
    
    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.user = new User()
    }

    public signup(){
        this.active_spinner = true

        this.userService.signupUser(this.user).subscribe(
            userJson => {
                this.registeredUser = true
                this.message = ""
                this.active_spinner = false
            },
            errors => {
                this.message = errors.error;
                this.active_spinner = false
            }
        );
    }
}