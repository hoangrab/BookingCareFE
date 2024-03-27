import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  lbooking!: Observable<Booking[]>;  // get list booking have success status;

  itemout: Booking={
    id: 0,
    doctor: {
      id: 0,
      name: '',
      major: ''
    },
    name: '',
    dob: '',
    status: '',
    note: '',
    date: '',
    session: ''
  };
  constructor(private bookingSv: BookingService){};

  ngOnInit() {
    this.lbooking = this.bookingSv.getAllBooking('Confirmed');
    this.lbooking.subscribe();
  }

  xem(item : Booking) {
    this.itemout = item;
  }
}
