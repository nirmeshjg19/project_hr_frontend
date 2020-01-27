import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeavesService } from '../leaves.service';

@Component({
  selector: 'app-myleaves',
  templateUrl: './myleaves.component.html',
  styleUrls: ['./myleaves.component.css']
})
export class MyleavesComponent implements OnInit 
{
uleaves;
  constructor(private router:Router,private leaveservice:LeavesService) 
  { 
    var data = sessionStorage.getItem('id');
      this.getAllLeavesOfUser();

  }

  getAllLeavesOfUser()
  {
    var data = sessionStorage.getItem('id');
      console.log("id"+sessionStorage.getItem('id'));
      this.leaveservice.getAllLeavesOfUser(data).subscribe((res)=>{
        console.log(res);
        this.uleaves = res;
  
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
  