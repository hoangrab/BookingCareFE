import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  // render, search, select major, pagination
  listDoctor!: Observable<Doctor[]>
  keyword = ''
  khoa = 0;

  constructor(private route : Router, private doctorsv : DoctorService){};

  ngOnInit() {
    this.listDoctor = this.doctorsv.getAllDoctor('active');
    this.listDoctor.subscribe({
      next(value) {
          // logic code
      },
      error(err) {
          console.log('Error!!!',err)
      },
    })
  }

  onSearch() {
    this.listDoctor = this.doctorsv.getAllDoctor('active');
    this.listDoctor.subscribe({
      next(value) {
          // logic code
      },
      error(err) {
          console.log('Error!!!',err)
      },
    })
  }

  onSelect() {
    console.log(this.khoa)
    this.listDoctor = this.doctorsv.getDoctorByMajor(this.khoa);
    this.listDoctor.subscribe({
      next(value) {
        // logic code
    },
    error(err) {
        console.log('Error!!!',err)
    },
    })
  }

  xem() {
    this.route.navigate(['public/bac-si-chi-tiet'])
  }

}
