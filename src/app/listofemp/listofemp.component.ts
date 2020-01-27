import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-listofemp',
  templateUrl: './listofemp.component.html',
  styleUrls: ['./listofemp.component.css']
})
export class ListofempComponent implements OnInit {
users;
  constructor(private router:Router,private dataservice:DataService)
   {
    this.getData();
   }

   getData()
   {
    
    let resultstate = this.dataservice.getData();
    resultstate.subscribe((data)=>{
      
      this.users =data;
    });
  }
  
  cancel()
  {
    this.router.navigate(['aboutus']);
  }

  ngOnInit() {
  }

}
