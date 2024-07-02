// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './Pages/home/home.component';
import { ListRafistoleurComponent } from './Pages/list-rafistoleur/list-rafistoleur.component';
import { DetailRafistoleurComponent } from './Pages/detail-rafistoleur/detail-rafistoleur.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-rafistoleur', component: ListRafistoleurComponent },
  { path: 'detail-rafistoleur/:id', component: DetailRafistoleurComponent },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
