import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerdepartment',
  templateUrl: './registerdepartment.component.html',
  styleUrls: ['./registerdepartment.component.css']
})
export class RegisterdepartmentComponent implements OnInit {

  constructor(private router:Router,private departmentservice:DepartmentService) { }

  register(myForm){

    let data = myForm.form.value;

    this.departmentservice.register(data).subscribe((res)=>{

    this.router.navigate(['departmentlist']);


    
    },(error)=>{

    }
    )
  }

  cancel()
  {
    this.router.navigate(['aboutus']);
  }
  ngOnInit() {
  }

}
