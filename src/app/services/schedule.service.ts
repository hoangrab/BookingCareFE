import { Injectable } from '@angular/core';
import { Schedule, schedules } from '../models/schedule';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  getAllSchedule(): Observable<Schedule[]> {
    return of(schedules);
  }
}
