import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: '' } },
  { path: 'register', component: RegisterPageComponent, data: { title: '' } },
  {
    path: '',
    component: HomePageComponent,
    data: { title: '' },
    children: [
      {
        path: '',
        component: DashboardPageComponent,
        data: { title: '' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
