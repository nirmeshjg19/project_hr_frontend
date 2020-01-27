import { Component, OnInit, ɵConsole } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from '../data.service';
import { EmtrService } from '../emtr.service';
import { Alert } from 'selenium-webdriver';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  ngOnInit() {
    
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
  
  name;
  constructor(private service:DataService,private router:Router,private emService:EmtrService,private translateService: TranslateService) { 

    translateService.addLangs(["en", "ge", "hi"]);
    translateService.setDefaultLang("en");

  }
  login(loginForm)
  {
    let data = loginForm.form.value;
   this.service.login(data).subscribe((res:any)=>{
    sessionStorage['email_id']=res['email_id'];
    sessionStorage['first_name']=res['first_name'];
    sessionStorage['role']=res['role'];
    sessionStorage.setItem("id",res.id);
    this.name=sessionStorage['first_name'];
    this.emService.loginbtnswitch(true);
 
  
    if(res['role']=="HR")
    {
        
      alert("Hello   "+this.name);
      this.router.navigate(['aboutus']);
    }
    else
    {
        alert("Hello   "+this.name);
        this.router.navigate(['empaboutus'])
    }
   },(err)=>{

    alert("Something went wrong");
   })
  }

  register()
  {
    this.router.navigate(['register']);
  }

  cancel()
  {
    this.router.navigate(['']);
  }
  
}
