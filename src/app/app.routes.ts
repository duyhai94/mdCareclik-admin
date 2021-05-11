import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeDetailComponent } from "./home/home-detail/home-detail.component";
import { HomeComponent } from "./home/home.component";

export const AppRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent

            },
            {
                path: 'home-detail',
                component: HomeDetailComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }

        ]

    }
]