import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { UserComponent } from './user/user.component';
import { ColorComponent } from './color/color.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'country',component:CountryComponent},
  {path:'color',component:ColorComponent},
  {path:'user',component: UserComponent},
  {path:'**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
