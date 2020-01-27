import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../project.service'
@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  projects;
  constructor(public projserve:ProjectService,public router:Router) {

    this.getData();
   }



  getData()
  {

   let resultstate = this.projserve.getData();
   resultstate.subscribe((data)=>{
     this.projects =data;
   });
 }


 cancel()
 {
   this.router.navigate(['aboutus']);
 }

  ngOnInit() {
  }

}
