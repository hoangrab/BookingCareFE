import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';
import { apiResponse } from 'src/app/models/apiResponse';
import { Major, majors } from 'src/app/models/major';
import { MajorService } from 'src/app/services/major.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent {
  lmajors!: Observable<Major[]>;
  addForm !: FormGroup;
  submited = false;
  changed = false;

  fileanh = '';
  fileanh1!:File;

  itemout: Major = {
    id: 0,
    name: '',
    description: '',
    image: ''
  };
  constructor(private majorSv: MajorService, private formbuilder: FormBuilder) { };

  ngOnInit() {
    this.lmajors = this.majorSv.getAllMajors();
    this.lmajors.subscribe();
    this.addForm = this.formbuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      file: ['', Validators.required]
    });
  }

  onchanged() {
    this.changed = true;
    console.log('da thay doi', this.changed)
    console.log(this.addForm.value)
  }

  get f() {
    return this.addForm.controls;
  }

  loaddata() : void{
    this.lmajors = this.majorSv.getAllMajors();
    this.lmajors.subscribe();
  }

  onsave() {
    this.submited = true;
    if (!this.addForm.invalid) {
      const {name,description,file} = this.addForm.value;
      const formda = new FormData();
      formda.append('file',this.fileanh1)
      formda.append('majordto',JSON.stringify({name,description}))
      this.majorSv.createMajor(formda).subscribe({
        next:(value) => {
          this.loaddata()
          alert('Đã tạo thành công!!!')
        },
        error(value) {
          alert('Có lỗi rồi cu')
        }
      })
    }
  }

  onupdate() {

  }

  sb(event: any) {
    const file: File = event.target.files[0];
    this.fileanh1 = file;
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.fileanh = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  xem(item: Major) {
    this.changed = false;
    this.itemout = item;
  }

  load() : void {
    alert('heeh')
  }

  xoa(id: number){
    this.majorSv.delete(id).subscribe({
     next:(value) => {
        this.loaddata()
        alert(value.message)
     }, 
     error(err) {
         alert('Đã có lỗi xảy ra')
     },
    })
  }
}
