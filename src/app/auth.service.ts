import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate{

  constructor(public http:HttpClient,public router:Router,public service:DataService) 
  { 
  }
  isLoggedIn()
  {
    return (sessionStorage.getItem("isloggedIn")=="1");
  }

  canActivate(routes:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }

  logout()
  {
    sessionStorage.setItem("isloggedIn","0");
    this.router.navigate(['login']);
  }
}
