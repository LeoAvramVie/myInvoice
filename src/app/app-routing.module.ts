import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./authentication/login-page/login-page.component";
import {AuthenticatonPageComponent} from "./authentication/authenticaton-page/authenticaton-page.component";
import {SignUpPageComponent} from "./authentication/sign-up-page/sign-up-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfilComponent} from "./profil/profil.component";
import {BillComponent} from "./bill/bill.component";
import {OverwiewComponent} from "./overwiew/overwiew.component";
import {ClientsComponent} from "./clients/clients.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AuthenticatonPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent } ,
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'profil' , component: ProfilComponent},
  { path: 'bill' , component: BillComponent},
  { path: 'overview' , component: OverwiewComponent},
  { path: 'clients' , component: ClientsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
