import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})
export class GetService {
    constructor(
        private http: HttpClient) {

    }



    getList(): Observable<any> {

        return this.http.get(`https://xktagmr2ec.execute-api.ap-southeast-1.amazonaws.com/dev/scan`).pipe(map((res: any) => res.payload))
    }

}