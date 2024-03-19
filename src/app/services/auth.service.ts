import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http : HttpClient) { }

  loginService(formdata : FormData) : Observable<any> {
    return this.http.post(
      environment.apiBaseUrl+'api/v1/upload',
      formdata,
    );
  }
}
