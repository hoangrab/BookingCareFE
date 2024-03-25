import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';
import { apiResponse } from '../models/apiResponse';
import { environment } from '../environment/environment.dev';
import { storageUtils } from '../utils/storage';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiUrl = environment.apiBaseUrl;
  userid = -1;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    if(storageUtils.get('userId')) this.userid = storageUtils.get('userId')
  }

  getAllDoctor(param : boolean) : Observable<Doctor[]> {
    return this.http.get<apiResponse<Doctor[]>>(`${this.apiUrl}api/v1/doctors`).pipe(
      map(e => {
        return e.data;
      })
    )
  }

  getDoctorById(param : number) {
    return this.http.get<apiResponse<Doctor>>(`${this.apiUrl}api/v1/doctor/${param}`).pipe(
      map(e =>{
        return e.data;
      })
    )
  }

  getDoctorByMajor(id : number) {
    return this.http.get<apiResponse<Doctor[]>>(`${this.apiUrl}api/v1/doctors?majorId=${id}`).pipe(
      map(e => {
        return e.data;
      })
    )
  }
}
