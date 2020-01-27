import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../project.service'
@Component({
  selector: 'app-registerproject',
  templateUrl: './registerproject.component.html',
  styleUrls: ['./registerproject.component.css']
})
export class RegisterprojectComponent implements OnInit {

  constructor(public router :Router,public proserve:ProjectService) { }
  register(myForm){

    let data = myForm.form.value;

    this.proserve.register(data).subscribe((res)=>{

    this.router.navigate(['projectlist']);


    
    },(error)=>{

    }
    )
  }


  ngOnInit() {
  }

}
