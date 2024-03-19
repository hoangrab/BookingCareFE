import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Major, majors } from '../models/major';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor() { }

  getAllMajor() : Observable<Major[]> {
    return of(majors);
  }
}
