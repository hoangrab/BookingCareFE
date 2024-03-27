import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterLinkActive } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent {
  an : boolean = true;
  doctor: Doctor= {
    id: '',
    avatar: '',
    fullName: '',
    userName: '',
    phone: '',
    email: '',
    enabled: false,
    major: {
      id: 0,
      name: '',
      description: '',
      avatar: ''
    }
  }

  constructor(private doctorsv : DoctorService, private route : ActivatedRoute){};

  ngOnInit() {
    const id = 1;
    this.doctorsv.getDoctorById(id).subscribe({
      next: (value) => {
        this.doctor = value;  
      },
      error(err) {
          alert('Khong tim thay bac si voi id: ' + id);
      },
    })
  }
}
