import { Component, OnInit } from '@angular/core';
import { BookingService } from "../booking.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private router: Router,private BookingService:BookingService ) { }

  ngOnInit() {}
  addBooking(booking){
  	this.BookingService.addRemotebooking(booking).subscribe((e)=>{this.router.navigate(['/payment']);});
  }
  doLogin(){
    // if(this.data.username == this.data.password){
      this.router.navigate(['/payment']);
    }
}
