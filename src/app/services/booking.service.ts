import { Injectable } from "@angular/core";
import { Booking, bookings } from "../models/booking";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment/environment.dev";




@Injectable({
    providedIn: 'root'
  })
  export class BookingService {
  
    apiUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }
  
    getAllBooking(param : string) : Observable<Booking[]> {
      return of(bookings.filter(e => e.status === param ));
    }
  }
  