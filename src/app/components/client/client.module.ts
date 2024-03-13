import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { ClientComponent } from "./client.component";




@NgModule({
    declarations: [FooterComponent,HomeComponent,HeaderComponent,ClientComponent],
    imports: [
      CommonModule, // <-- Import thêm để dùng forms sau này
    ],
  })
  export class ClientModule {}