import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Major, majors } from '../models/major';
import { Contact, contacts } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getAllContact() : Observable<Contact[]> {
    return of(contacts);
  }
}
