// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import your components and services
import { DetailRafistoleurComponent } from './Pages/detail-rafistoleur/detail-rafistoleur.component';
import{ HomeComponent } from './Pages/home/home.component';
import { ListRafistoleurComponent } from './Pages/list-rafistoleur/list-rafistoleur.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

// Import your services
import { RafistoleurService } from './servises/rafistoleur.service';

@NgModule({
  declarations: [
    AppComponent,
    // Declare your components here
    DetailRafistoleurComponent,
    HomeComponent,
    ListRafistoleurComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // Provide your services here
    RafistoleurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
