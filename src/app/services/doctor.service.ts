import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doctor, doctors } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  getAllDoctor(param : boolean) : Observable<Doctor[]> {
    return of(doctors.filter(e => e.active === param));
  }
}
