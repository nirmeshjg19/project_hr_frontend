import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {

  constructor(public http:HttpClient) { }



  generateOtp(data)
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/user/forgot?email="+data);
  }
  setpassword(data)
  {
    return this.http.post("http://localhost:8080/Hr_mgmt/user/confirmOtp/",data);
  }

}
