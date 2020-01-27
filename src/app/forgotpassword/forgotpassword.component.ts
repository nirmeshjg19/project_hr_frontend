import { Component, OnInit } from '@angular/core';
import { OtpserviceService } from '../otpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  msg;
  name:string;
  constructor(private userservice:OtpserviceService,
              private router:Router) { }
  ngOnInit() {
  }



  cancel()
  {
     this.router.navigate(['login']);
  }


   
  generateOtp()
  {
   
    this.userservice.generateOtp(this.name).subscribe((res:String)=>{
      this.msg="Change password";
      console.log(this.msg);
      this.router.navigate(['setpass']);
    },
    error=>{
      if(error.status==200){
      this.router.navigate(['setpass']);
      }
      else
      {
        this.msg="Enter valid email";
      }
    
    })
}
}


