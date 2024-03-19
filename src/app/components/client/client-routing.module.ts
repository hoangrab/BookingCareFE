import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { MajorComponent } from "./major/major.component";
import { HomeComponent } from "./home/home.component";


const router: Routes = [
    {
        path: 'home',
        component: HomeComponent
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


export class ClientRoutingModule{

}