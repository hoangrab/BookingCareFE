import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { ClientComponent } from "./client.component";
import { MajorComponent } from './major/major.component';
import { ClientRoutingModule } from "./client-routing.module";
import { ScheduleComponent } from './schedule/schedule.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, NgModel } from "@angular/forms";




@NgModule({
    declarations: [FooterComponent,HomeComponent,HeaderComponent,ClientComponent, MajorComponent, ScheduleComponent],
    imports: [
      CommonModule, // <-- Import thêm để dùng forms sau này
      ClientRoutingModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      FormsModule
    ],
  })
  export class ClientModule {}