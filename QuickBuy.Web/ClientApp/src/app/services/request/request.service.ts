import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core"
import { Observable } from "rxjs";
import { Request } from "../../model/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _baseUrl: string;

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public checkoutBuy(request: Request): Observable<number> {
    return this.http.post<number>(this._baseUrl + "api/request", JSON.stringify(request), { headers: this.headers });
  }
}