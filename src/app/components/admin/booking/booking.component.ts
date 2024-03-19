import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  lbooking!: Observable<Booking[]>;

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
    this.lbooking = this.bookingSv.getAllBooking('Pending');
    this.lbooking.subscribe();
  }

  xem(item : Booking) {
    this.itemout = item;
  }
}
