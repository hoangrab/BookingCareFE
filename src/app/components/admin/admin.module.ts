import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";




@NgModule({
    declarations: [AdminComponent],
    imports: [
      CommonModule, // <-- Import thêm để dùng forms sau này
      AdminRoutingModule,
    ],
  })
  export class AdminModule {}