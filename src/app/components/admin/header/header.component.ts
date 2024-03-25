import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { apiResponse } from 'src/app/models/apiResponse';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { storageUtils } from 'src/app/utils/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router : Router, private doctorsv : DoctorService){};

  listDoctor !: Observable<Doctor[]>;

  user !: Observable<Doctor>;

  ngOnInit() {
    this.listDoctor = this.doctorsv.getAllDoctor(true);
    this.listDoctor.subscribe();

    this.user = this.doctorsv.getDoctorById(storageUtils.get('userId'));
    this.user.subscribe();
  }

  redirect() {
    storageUtils.clear()
    this.router.navigateByUrl('/login')
  }
}
