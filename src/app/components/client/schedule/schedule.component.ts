import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { Major } from 'src/app/models/major';
import { Schedule, schedules } from 'src/app/models/schedule';
import { DoctorService } from 'src/app/services/doctor.service';
import { MajorService } from 'src/app/services/major.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  ngayApi: Schedule[] = schedules;
  ngayApi1: Schedule[] = schedules;
  selectedTime: string | null = null; 
  submited=false;
  listMajor!:Observable<Major[]>;
  listDoctor!:Observable<Doctor[]>;

  addForm!: FormGroup;

  constructor(private formbuilder : FormBuilder,private majorsv: MajorService,private doctorsv : DoctorService){};
  
  ngOnInit() {
    this.addForm = this.formbuilder.group({
      name:['',Validators.compose([Validators.minLength(6),Validators.required])],
      dob: ['',Validators.required],
      phone: ['',Validators.compose([Validators.minLength(9),Validators.maxLength(12),Validators.required])],
      email: ['',Validators.compose([Validators.email,Validators.required])],
      gender: [,Validators.required],
      address: ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(50)])],
      idMajor: ['',Validators.required],
      idUser: ['',Validators.required],
      date: ['',Validators.required],
      session: ['',Validators.required],
      note: ['',Validators.required]
    })

    this.listMajor = this.majorsv.getAllMajors();
    this.listMajor.subscribe({
      next(value) {
          console.log('lay data ok nha')
      },
      error(err) {
          console.log('Đã lỗi khi gọi data')
      },
    })
  }

  get f() {
    return this.addForm.controls;
  }

  onsb() {
    this.submited = true;
    if(this.addForm.valid) {
      alert('ok')
    }
  }

  onselectkhoa() {
    const id = this.addForm?.get('idMajor')?.value;
    this.listDoctor = this.doctorsv.getDoctorByMajor(id);
    this.listDoctor.subscribe({
      next(value) {
          console.log('da chay selec doctor')
      },
      error(err) {
          console.log('co loi',err)
      },
    });

  }

  uncheckRadio() {
    this.selectedTime = null; 
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const {name,dob,phone,email,gender,address,idMajor,idUser,date,session,note} = this.addForm.value;
    console.log(event)
    const isoString: string = formatDate(date, 'yyyy-MM-ddTHH:mm:ssZ', 'en-US'); // Chuyển đổi sang chuỗi ISO 8601
    console.log('gia tri that:',isoString); // Log để kiểm tra
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
