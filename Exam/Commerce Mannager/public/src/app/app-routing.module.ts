import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { RegistComponent } from './regist/regist.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'dashboard',component: DashboardComponent },
    { path: 'login',component: LoginComponent },
    { path: 'regist',component: RegistComponent },
    { path: 'edit/:id',component: EditComponent },
    { path: 'show/:id',component: ShowComponent },
    { path: 'create',component: CreateComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
