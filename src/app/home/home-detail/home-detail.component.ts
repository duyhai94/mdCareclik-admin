import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

@Component({
    selector: 'app-home-detail',
    templateUrl: './home-detail.component.html',
    styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

    constructor(private list: GetService,
        private http: HttpClient) { }

    ngOnInit(): void {

    }

}
