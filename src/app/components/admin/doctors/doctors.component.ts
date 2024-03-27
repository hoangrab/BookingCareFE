import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Observable, filter, map, of, switchMap } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  title=''
  status = ''
  listDoctor !: Observable<Doctor[]>;
  addForm !: FormGroup;
  submited = false;

  doctors$!: Observable<Doctor[]>;
  constructor(private route: ActivatedRoute, private doctorService : DoctorService,
              private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      name: ['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })

    this.route.params.subscribe(params => {
      const activeParam = params['vip'];
      this.status = activeParam
      console.log('gia tri cua active : ' + activeParam)
      this.title = activeParam === 'active' ? 'Danh sách bác sĩ đang làm' : 'Danh sách bác sĩ đã rời';
      this.listDoctor = this.doctorService.getAllDoctor(activeParam);
      this.listDoctor.subscribe({
        next(value) {
            console.log('get thanh cong')
        },
        error(err) {
            console.log('loi loi mat')
        },
      })
    });
  }

  get f() {
    return this.addForm.value;
  }

  onsubm() {
    this.submited = true;
    if(this.addForm.valid) {
      alert('form ok roi nha con');
    }
  }
  

  xem(item : Doctor) {
    // this.itemout = item;
  }
}