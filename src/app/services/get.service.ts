import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class GetService {
    constructor(
        private http: HttpClient) {

    }



    getList(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Access-Control-Allow-Origin": "true",
            }),
        };
        return this.http.get(`https://xktagmr2ec.execute-api.ap-southeast-1.amazonaws.com/dev/scan`)
    }
}