import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctordetailComponent } from './doctors/doctordetail/doctordetail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MajorComponent } from './major/major.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";




@NgModule({
    declarations: [AdminComponent, HeaderComponent, FooterComponent, NavbarComponent, DoctorsComponent, DoctordetailComponent,DashboardComponent, MajorComponent],
    imports: [
      CommonModule, // <-- Import thêm để dùng forms sau này
      AdminRoutingModule
    ],
  })
  export class AdminModule {}