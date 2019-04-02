import { Component, OnInit } from '@angular/core';
import   {BookingService } from "../booking.service";
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private router: Router,private BookingService:BookingService,private route:ActivatedRoute ) { }
movie:any;
private sub:any;
id:number;
books:any={};
numbers :number ;
customerId= JSON.parse(localStorage.getItem('user'));

movies={
  customer_id :'',
  movie_id :'',
  tickets :'',
  movie_name:'', 
  movie_time:'',
  theatre:'',
  screen :'',
  city :'',
  movie_date:'',
  date :'',
  amount :'',
  ticket_price :'',
}
  ngOnInit() {
 this.sub=this.route.params.subscribe(params=>{
   this.id=+params['id'];
   this.BookingService.getMovieById(this.id).subscribe((movie)=>{
    this.movie=movie;
    this.movie=this.movie.result;
    console.log(this.movie);
   })
 })
  }
  
  addBooking(){
    var booking = {customer_id:this.customerId.id,movie_id:this.id,date:this.books.date,time:this.books.movie_time,theatre:this.books.theatre,screen:this.books.screen,city:this.books.city,tickets:this.books.tickets,price:this.books.ticket_price};
    this.BookingService.addRemoteBooking(this.movie).subscribe(() =>this.router.navigate(['/payment']));
   
  }
  
  
}
