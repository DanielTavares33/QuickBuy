import {Injectable, Inject, inject} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/model/user";

@Injectable({
    providedIn: "root"
})
export class UserService {

    private baseURL: string
    private _user: User

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json')
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
        this.baseURL = baseUrl;
    }

    set user(user: User){
        sessionStorage.setItem("user-authenticated", JSON.stringify(user));
        this._user = user;
    }

    get user(): User {
        let user_json = sessionStorage.getItem("user-authenticated");
        this._user = JSON.parse(user_json);
        return this._user;
    }

    /// Verify if the User is authenticated
    public user_authenticated(): boolean {
        return this._user != null && this._user.email != "" && this._user.password != "";
    }

    // Clean User Session
    public clean_session(){
        sessionStorage.setItem("user-authenticated", "");
        this._user = null;
    }
    
    // Verify User
    public verifyUser(user: User): Observable<User> {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            email: user.email,
            password: user.password
        }

        return this.http.post<User>(this.baseURL + "api/user/VerifyUser", body, {headers});
    }

    // Signup User
    public signupUser(user: User): Observable<User>{
        return this.http.post<User>(this.baseURL + "api/user", JSON.stringify(user), {headers: this.headers});
    }
}