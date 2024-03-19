import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Major, majors } from 'src/app/models/major';
import { MajorService } from 'src/app/services/major.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent {
  lmajors!: Observable<Major[]>;

  itemout: Major={
    id: 0,
    name: '',
    description: '',
    image: ''
  };
  constructor(private majorSv: MajorService){};

  ngOnInit() {
    this.lmajors = this.majorSv.getAllMajor();
    this.lmajors.subscribe();
  }

  xem(item : Major) {
    this.itemout = item;
  }
}
