import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  lschedule!: Observable<Schedule[]>;

  constructor(private scheSv: ScheduleService){};

  ngOnInit() {
    this.lschedule = this.scheSv.getAllSchedule();
    this.lschedule.subscribe();
  }
}
