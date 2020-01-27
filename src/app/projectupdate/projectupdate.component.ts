import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrls: ['./projectupdate.component.css']
})
export class ProjectupdateComponent implements OnInit {

  id;
  project;

  constructor(public router:Router,public proserve:ProjectService,private activeRoute:ActivatedRoute) 
  { 
    activeRoute.paramMap.subscribe((params)=>{
      this.id=params.get("id");

      this.proserve.getSingleProjectData(this.id).subscribe((res)=>{

        console.log(res);
        this.project=res;
        
        console.log(this.project);
      });
    });
  }

  Update()
  {
    console.log(this.project);
    console.log("update method");
    this.project.id=this.id;
    this.proserve.Update(this.project).subscribe((res:any)=>{
       console.log("result"+res);
     
        console.log("update method success");

        this.router.navigate(['projectlist']);
     
    });
   }

   cancel()
 {
   this.router.navigate(['projectlist']);
 }


  ngOnInit() {
  }

}
