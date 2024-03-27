import { Injectable } from "@angular/core";
import { Booking, bookings } from "../models/booking";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment/environment.dev";
import { apiResponse } from "../models/apiResponse";




@Injectable({
    providedIn: 'root'
  })
  export class BookingService {
  
    apiUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }
  
    getAllBooking(param : string) : Observable<Booking[]> {
      return of(bookings.filter(e => e.status === param ));
    }

    createBooking(name:string,dob:string,phone:string,email:string,gender:string,address:string,idMajor:string,
      idUser:string,date:string,session:string,note:string) {
      return this.http.post<apiResponse<any>>(`${this.apiUrl}booking`,
      {name,dob,phone,email,gender,address,idMajor,idUser,date,session,note});
    }
  }
  