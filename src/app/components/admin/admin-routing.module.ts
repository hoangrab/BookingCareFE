import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";


const router: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})


export class AdminRoutingModule{

}