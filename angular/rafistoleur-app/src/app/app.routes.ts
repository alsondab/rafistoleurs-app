import { Routes } from '@angular/router';
import { ListRafistoleurComponent } from './Pages/list-rafistoleur/list-rafistoleur.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetailRafistoleurComponent } from './Pages/detail-rafistoleur/detail-rafistoleur.component';

export const routes: Routes = [
    {
        //route par defeaut
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'list-rafistoleur',
        component: ListRafistoleurComponent
    },
    {
        path:'detail-rafistoleur',
        component: DetailRafistoleurComponent
    },
    { 
        //route par defeaut si invalid url
        path: '**',
        component: HomeComponent
    }
];
