import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-empupdate',
  templateUrl: './empupdate.component.html',
  styleUrls: ['./empupdate.component.css']
})
export class EmpupdateComponent implements OnInit {

  id;
  user;
  message;
  
  constructor(private dataservice:DataService,private router:Router,private activeRoute:ActivatedRoute) 
  {
    activeRoute.paramMap.subscribe((params)=>{
      this.id=params.get("id");

      this.dataservice.getSingleUserData(this.id).subscribe((res)=>{

        console.log(res);
        this.user=res;
        
        console.log(this.user);
      });
    });
  }

  Update()
  {
    console.log(this.user);
    console.log("update method");
    this.user.id=this.id;
    this.dataservice.UpdateData(this.user).subscribe((res:any)=>{
       console.log("result"+res);
     
        console.log("update method success");
        this.router.navigate(['list']);
     
    });
   }
   cancel()
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
  ngOnInit() {
  }

}
