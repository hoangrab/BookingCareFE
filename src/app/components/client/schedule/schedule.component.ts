import { DatePipe, formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { Observable, map } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { Major } from 'src/app/models/major';
import { Schedule, Schedules, schedules } from 'src/app/models/schedule';
import { BookingService } from 'src/app/services/booking.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { MajorService } from 'src/app/services/major.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  @Input() ok = false;
  @Input() ktra : boolean = false;
  // checksang va checkchieu la de hien thi button sang hay chieu
  checksang = true;
  checkchieu = true;
  //ngayban : Ngày mà bác sĩ có lịch trùng
  ngayban !: Schedules[]
  disableDate !: Date[];
  selectedTime: string | null = null; 
  submited=false;
  listMajor!:Observable<Major[]>;
  listDoctor!:Observable<Doctor[]>;

  addForm!: FormGroup;

  constructor(private formbuilder : FormBuilder,private majorsv: MajorService,
    private doctorsv : DoctorService, private schesv : ScheduleService,private bookingsv : BookingService){};
  
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

  // luu thong tin o ham nay
  onsb() {
    this.submited = true;
    if(this.addForm.valid) {
      const {name,dob,phone,email,gender,address,idMajor,idUser,date,session,note} = this.addForm.value;
      this.bookingsv.createBooking(name,dob,phone,email,gender,address,idMajor,idUser,date,session,note).subscribe({
        next(value) {
            alert('Đã thêm thành công')
            // redirect đến 1 trang nào đó với nội dung là đã thêm thành công, đang chờ duyệt , check email để nhận kết quả
        },
        error(err) {
            console.log('Đã có lỗi xảy ra khi thêm: ',err)
        },
      })
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

  onselectDoctor() {
    const id = this.addForm?.get('idDoctor')?.value;
    this.schesv.getAllScheduleByIdDoctor(id).subscribe({
      next : (value) => {
          this.ngayban = value;
          value.forEach( e => {
            this.disableDate.push(new Date(e.date)) // an di ngay trong lich duoc chon
          });
      },
      error(err) {
          console.log('Hava error!!!')
      },
    });
  }

  uncheckRadio() {
    this.selectedTime = null; 
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const {name,dob,phone,email,gender,address,idMajor,idUser,date,session,note} = this.addForm.value;
    const isoString: string = formatDate(date, 'yyyy-MM-dd', 'en-US'); // Gia tri cua ngay duoc chon
    console.log('gia tri that:',isoString);

    const ngayay = this.ngayban.find(e => e.date == isoString)
    if(!ngayay?.session) {
      this.checksang=false;
      this.checkchieu=false
    }
    else if(ngayay?.session=='CHIEU') this.checkchieu = true;
    else this.checksang = true;

  }

  myFilter = (d: Date | null): boolean => {
    const selectedDate = d || new Date();
    return !this.disableDate.some((disabledDate) =>
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
