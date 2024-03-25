import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  constructor(private route : Router){};
  xem() {
    this.route.navigate(['public/bac-si-chi-tiet'])
  }

}
