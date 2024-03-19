import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Observable, filter, map, of, switchMap } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  title=''
  itemout: Doctor={
    id: '',
    avatar: '',
    name: '',
    khoa: {
      id: 0,
      name: ''
    },
    age: 0,
    phone: '',
    active: false
  };
  constructor(private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router) {}

ldoctors!: Observable<Doctor[]>;

ngOnInit() {
  this.route.params.subscribe(params => {
    const activeParam = params['vip'];
    this.title = activeParam === 'active' ? 'Danh sách bác sĩ đang làm' : 'Danh sách bác sĩ đã rời';
    this.ldoctors = this.doctorService.getAllDoctor(activeParam === 'active');
    this.itemout.active= (activeParam === 'active')
  });
}

  xem(item : Doctor) {
    this.itemout = item;
  }
}