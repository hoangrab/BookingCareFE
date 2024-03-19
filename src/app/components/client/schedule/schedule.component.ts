import { Component } from '@angular/core';
import {
  MatCalendarCellClassFunction,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { Schedule, schedules } from 'src/app/models/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  chuoi = '';
  opasang = 0.3;
  opachieu = 0.3;
  ngayApi: Schedule[] = schedules;

  ngayApi1: Schedule[] = schedules;

  selectedTime: string | null = null; 

  uncheckRadio() {
    this.selectedTime = null; 
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.uncheckRadio();
    this.opachieu = 0.3;
    this.opasang = 0.3;
    let found = true;
    this.chuoi =
      '' +
      event.value?.getFullYear() +
      '-' +
      ((event.value?.getMonth() || 0) + 1) +
      '-' +
      event.value?.getDate();
    this.ngayApi1.forEach((e) => {
      if (e.date === this.chuoi) {
        found = false;
        if (e.session === 'sang') {
          this.opasang = 1;
          this.opachieu = 0.3;
        } else if (e.session === 'chieu') {
          this.opachieu = 1;
          this.opasang = 0.3;
        }
        return;
      }
    });
    if(found){
    this.opachieu = 1;
    this.opasang = 1;
    }
  }

  ngOnInit() {
    
  }

  myFilter = (d: Date | null): boolean => {
    const disabledDates: Date[] = [];
    this.ngayApi.forEach((e) => disabledDates.push(new Date(e.date)));
    const selectedDate = d || new Date();
    return !disabledDates.some((disabledDate) =>
      this.isSameDate(selectedDate, disabledDate)
    );
  };

  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
