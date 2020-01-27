import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../leaves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent implements OnInit {

  leaves;
  constructor(private router:Router,private leaveservice:LeavesService) 
  { 
    this.getData();
  }


  getData()
  {
      let resultstate = this.leaveservice.getData();
      resultstate.subscribe((data)=>{
     this.leaves =data;
     console.log(this.leaves);
   });
  }

  ngOnInit() {
  }

}
