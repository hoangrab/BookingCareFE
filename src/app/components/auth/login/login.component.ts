import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  file1!: File; 
  constructor(private auth : AuthService){};
  
  result !: Observable<any>;

  onch(file : any) {
    console.log(file)
    this.file1 = file.target.files[0];
    console.log(this.file1)
  }

  lgin() {
    let formdata = new FormData();
    formdata.append('file',this.file1)
    this.result = this.auth.loginService(formdata);
    this.result.subscribe(
      (response) => {
        console.log(response)
      }
    );
  }
}
