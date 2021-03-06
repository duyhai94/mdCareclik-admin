import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableModel } from '../model/table.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    data: TableModel;
    list: TableModel;
    constructor(private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get(`https://xktagmr2ec.execute-api.ap-southeast-1.amazonaws.com/dev/scan`).subscribe((res: any) => {
            this.list = res.payload;

        },
        )
    }

}
