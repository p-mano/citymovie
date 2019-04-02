import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerService from '../customer.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private customerService:CustomerService,public alertController: AlertController) { }
 customers=[];
 customer={name:"",password:"",address:"",email:"", phone:""}
  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result})
  }
  doLogin(customer){
   for(var i=0;i<this.customers.length;i++) {
    if((customer.email==this.customers[i].email) && (customer.password == this.customers[i].password)){
      console.log('i am here');
      this.router.navigate(['/tabs/tab1']);
      if (localStorage.getItem('user')==null)
      {
        localStorage.setItem('user', JSON.stringify(customer)); 
      }
    }
    else {
      this.invalidUser();
    }
   }
}
async invalidUser() {
  const alert = await this.alertController.create({
    subHeader: 'Email or password is Invalid',
   
    buttons: ['Cancel']
  });

  await alert.present();
}

}