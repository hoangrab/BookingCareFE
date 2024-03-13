import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { environment } from '../environment/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';

const Doctors: Doctor[] = [
    {
        id: '1',
        name: 'van nam',
        active: 'true'
    },
    {
        id: '2',
        name: 'duc manh',
        active: 'true'
    },
    {
        id: '3',
        name: 'hoai nam',
        active: 'false'
    },
    {
        id: '4',
        name: 'trung duc',
        active: 'true'
    },
    {
        id: '5',
        name: 'duy ngoc',
        active: 'false'
    }
]

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  getAllProduct(param : string) : Observable<Doctor[]> {
    // let doctor2 = Doctors.find(e => e.active === param);
    return of(Doctors.filter(e => e.active === param)).pipe(delay(500));
  }
}
