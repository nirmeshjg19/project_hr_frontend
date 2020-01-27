import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeavesService } from '../leaves.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  
  constructor(private router:Router,private leave:LeavesService) { }

  applyleave(myForm)
  {
  let data = myForm.form.value;

    this.leave.applyleave(data).subscribe((res)=>{

    this.router.navigate(['myleave']);


    
    },(error)=>{

    }
    )
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
