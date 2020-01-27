import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-department',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentComponent implements OnInit {
departments;
  constructor(private router:Router,private departmentservice:DepartmentService)
  { 
    this.getData();
  }

  getData()
  {

   let resultstate = this.departmentservice.getData();
   resultstate.subscribe((data)=>{
     this.departments =data;
   });
 }

 cancel()
 {
   this.router.navigate(['aboutus']);
 }

  ngOnInit() {
  }

}
