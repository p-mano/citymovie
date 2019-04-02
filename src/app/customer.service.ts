import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private customerUrl = 'http://192.168.1.18:3000/api/customers';

  constructor( private http: HttpClient){}
Customers=[];
getRemoteCustomers(): Observable<[]>{
  return this.http.get<[]>(this.customerUrl); 		
}
addRemoteCustomer(customer):Observable<any>{
  return this.http.post(this.customerUrl,customer);
}
}
