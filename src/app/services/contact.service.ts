import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Major, majors } from '../models/major';
import { Contact, contacts } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  getAllContact() : Observable<Contact[]> {
    return of(contacts);
  }

  createContact(name:string,dob:string,phone:string,email:string,note:string) {
    return this.http.post(`${this.apiUrl}`,{name,dob,phone,email,note});
  }
  
}
