import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {
  

  singleuser;
  departments;
  projects;
  constructor(private router:Router,private dataservice:DataService) 
  { 
      var data = sessionStorage.getItem('id');
      this.getSingleUserData();
  }

  getSingleUserData()
  {
     var data = sessionStorage.getItem('id');
      console.log("id"+sessionStorage.getItem('id'));
      this.dataservice.getSingleUserData(data).subscribe((res)=>{
        console.log(res);
        this.singleuser = res;
        //  this.departments = this.singleuser.department;
        //  this.projects = this.singleuser.projects;
        // console.log(this.departments);
        // console.log(this.projects);
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
