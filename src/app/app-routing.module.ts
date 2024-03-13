import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ClientComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    loadChildren: () => import('./components/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: ()=> import('./components/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
