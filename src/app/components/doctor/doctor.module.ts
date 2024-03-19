import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { DoctorRoutingModule } from "./doctor-routing.module";
import { DoctorComponent } from "./doctor.component";
import { ChartModule } from 'primeng/chart';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ScheduleComponent } from './schedule/schedule.component';
import { BookingComponent } from './booking/booking.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [HeaderComponent,NavbarComponent,FooterComponent,DoctorComponent,DashboardComponent, ScheduleComponent, BookingComponent, NotificationComponent, ProfileComponent],
    imports: [
      CommonModule,
      DoctorRoutingModule, // <-- Import thêm để dùng forms sau này,
      ChartModule,
    ],
  })
  export class DoctorModule {}