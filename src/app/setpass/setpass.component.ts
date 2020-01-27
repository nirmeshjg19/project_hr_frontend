import { Component, OnInit } from '@angular/core';
import {OtpserviceService} from '../otpservice.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-setpass',
  templateUrl: './setpass.component.html',
  styleUrls: ['./setpass.component.css']
})
export class SetpassComponent implements OnInit {

  msg:string;
  flag:boolean;

  constructor(private userservice:OtpserviceService,private router:Router) { }

  ngOnInit() {
  }

  updatePass(data)
  {
    this.userservice.setpassword(data).subscribe((res)=>{
      console.log(res);

      if(res)
      {
        this.msg="Successfully changed password";
        this.flag=true;
      }
      else
      {
        this.msg="Enter valid Otp";
        this.flag=false;
      }
    })
    console.log(data);
  }
  navigate()
  {
    this.router.navigate(['login']);
  }
}





