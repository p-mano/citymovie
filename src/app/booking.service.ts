import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingUrl = 'http://192.168.1.18:3000/api/booking';
  private movieUrl = 'http://192.168.1.18:3000/api/movies';
  constructor( private http: HttpClient) { }
  getMovieById(id):Observable<any>{
          return this.http.get<[]>(this.movieUrl+''+id);
  }
  addRemoteBooking(booking):Observable<any>{
return this.http.post(this.bookingUrl,booking);
}
}
