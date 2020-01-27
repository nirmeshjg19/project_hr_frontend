import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
empimage;
imgUrl;
  constructor(private router:Router,private dataservice:DataService) { }

  register(myForm){

    let data = myForm.form.value;

    this.dataservice.register(data,this.empimage).subscribe((res)=>{

    this.router.navigate(['login']);


    
    },(error)=>{

    }
    )
  }
  onSelect(event){
    this.empimage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.empimage);
    // reader.onload = ((event) = {
    //   this.imgUrl = reader.result;  
    // }
  
    reader.onload = (_event) => { 
      this.imgUrl = reader.result; 
    }
  }

  cancel()
  {
    this.router.navigate(['aboutus']);
  }
  ngOnInit()
   {

  }

}
