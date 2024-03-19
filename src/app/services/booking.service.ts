import { Injectable } from "@angular/core";
import { Booking, bookings } from "../models/booking";
import { Observable, delay, of } from "rxjs";




@Injectable({
    providedIn: 'root'
  })
  export class BookingService {
  
    constructor() { }
  
    getAllBooking(param : string) : Observable<Booking[]> {
      return of(bookings.filter(e => e.status === param ));
    }
  }
  