import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { MajorComponent } from "./major/major.component";


const router: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'doctors',
        component: DoctorsComponent
    },
    {
        path: 'major',
        component: MajorComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})


export class AdminRoutingModule{

}