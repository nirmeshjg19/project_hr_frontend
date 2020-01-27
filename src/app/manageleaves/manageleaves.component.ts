import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../leaves.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manageleaves',
  templateUrl: './manageleaves.component.html',
  styleUrls: ['./manageleaves.component.css']
})
export class ManageleavesComponent implements OnInit 
{
aleave;
id;
active;
  constructor(private router:Router,private leaveservice:LeavesService,private activeRoute:ActivatedRoute) 
  { 
    this.getAllActiveLeaves();
    
    activeRoute.paramMap.subscribe((params)=>{

      this.id=params.get("id");
      console.log(this.id);

      this.active = params.get("active");
      console.log(this.active);

      if(this.active == 1 )
      {
          this.leaveservice.acceptLeave(this.id).subscribe((res)=>{

            console.log(res);
            this.aleave=res;
            
            console.log(this.aleave);
          });
      }
      else
      {
        this.leaveservice.disapproveLeave(this.id).subscribe((res)=>{

          console.log(res);
          this.aleave=res;
          
          console.log(this.aleave);
        });
      }
    });

    
  }

  getAllActiveLeaves()
  {
    let resultstate = this.leaveservice.getAllActiveLeaves();
    
    resultstate.subscribe((data)=>{
      
      this.aleave =data;

      console.log(this.aleave);
    });
  }

  acceptLeave(aleave)
  {
    console.log(aleave);
    aleave.active="false";
    aleave.status = "Approved";

    console.log(aleave.active);
    console.log("disapprove method");

    this.leaveservice.acceptLeave(aleave).subscribe((res:any)=>{
      
        console.log("result"+res);
     
        console.log("approve leave method success");

        this.getAllActiveLeaves();

        this.router.navigate(['manageleave']);
    });
  }



  disapproveLeave(aleave)
  {
    console.log(aleave);
    aleave.active="false";
    aleave.status = "Disapproved";
    
    console.log(aleave.active);
    console.log("disapprove method");
        
    this.leaveservice.disapproveLeave(aleave).subscribe((res:any)=>{
       console.log("result"+res);
     
        console.log("diapprove leave method success");

        this.getAllActiveLeaves();

        this.router.navigate(['manageleave']);
     
    });
  }

  

  cancel()
  {
    this.router.navigate(['list']);
  }

  ngOnInit() {
  }

}
