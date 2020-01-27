import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departmentupdate',
  templateUrl: './departmentupdate.component.html',
  styleUrls: ['./departmentupdate.component.css']
})
export class DepartmentupdateComponent implements OnInit {
  id;
  department;
  message;
  constructor(private departmentservice:DepartmentService,private router:Router,private activeRoute:ActivatedRoute)
   {
    activeRoute.paramMap.subscribe((params)=>{
      this.id=params.get("id");

      this.departmentservice.getSingleDepartmentData(this.id).subscribe((res)=>{

        console.log(res);
        this.department=res;
        
        console.log(this.department);
      });
    });
    }

    Update()
    {
      console.log(this.department);
      console.log("update method");
      this.department.id=this.id;
      this.departmentservice.UpdateData(this.department).subscribe((res:any)=>{
         console.log("result"+res);
       
          console.log("update method success");

          this.router.navigate(['departmentlist']);
       
      });
     }

     cancel()
     {
       this.router.navigate(['departmentlist']);
     }

  ngOnInit() 
  {
  }

}
