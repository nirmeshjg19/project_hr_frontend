import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  isLogin:boolean;
  isHR:any;
  show:any;
  singleuser;

 constructor(public service:AuthService,private emtrservice:EmtrService,private router:Router,private dataservice:DataService)
 { 
 
 
   if(sessionStorage['email_id']!=undefined)
   {
     this.isLogin=true;
   }

   this.getSingleUserData();
 }


 ngOnInit()
   {
        this.emtrservice.getEmittedValueFromLogInbtnSwithch().subscribe(item=> this.isLogin=item); 
   }
   call()
   {
    var data = sessionStorage.getItem('role');
    if(data == "HR")
    {
       this.router.navigate(['aboutus']);
    }
    else
    {
      this.router.navigate(['empaboutus']);
    }
   }


   getSingleUserData()
   {
      var data = sessionStorage.getItem('id');
       console.log("id"+sessionStorage.getItem('id'));
       this.dataservice.getSingleUserData(data).subscribe((res)=>{
         console.log(res);
         this.singleuser = res;
        
       });
       
       
   }
 

  logout()
  {
    this.router.navigate(['login']);

    this.isLogin=false;

    delete sessionStorage['email_id'];
  }
}
