import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService
 {
  constructor(public http:HttpClient) 
  { 

  }
 
  login(user)
  {
    return this.http.post("http://localhost:8080/Hr_mgmt/user/login",user);
  }
  forgot(user)
  {
    return this.http.post("http://localhost:8080/Hr_mgmt/user/forgot",user);
  }
  confirmOtp(otp)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/confirmOtp",otp);
  }
  resetPassword(pass)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/resetpassword",pass);
  }
  
  register(user,empimage)
  {
    console.log(user);
    
    
    const formdata = new FormData();
    
    formdata.append("role",user.role);
    console.log(user.role);

    formdata.append("city",user.city);
    console.log(user.city);

    formdata.append("first_name",user.first_name);
    console.log(user.first_name);
    formdata.append("last_name",user.last_name);
    console.log(user.last_name);
    formdata.append("maritial_status",user.maritial_status);
    console.log(user.maritial_status);
    formdata.append("permanant_address",user.permanant_address);
    console.log(user.permanant_address);
    formdata.append("email_id",user.email_id);
    console.log(user.email_id);
    formdata.append("password",user.password);
    console.log(user.password);
    formdata.append("salary",user.salary);
    console.log(user.salary);
    formdata.append("contact",user.contact);
    console.log(user.contact);
    formdata.append("gender",user.gender);
    console.log(user.gender);
    formdata.append("hr_id",user.hr_id);
    console.log(user.hr_id);
    formdata.append("experience",user.experience);
    console.log(user.experience);
    formdata.append("date_of_birth",user.date_of_birth);
    console.log(user.date_of_birth);
    formdata.append("date_of_joining",user.date_of_joining);
    console.log(user.date_of_joining);
    formdata.append("empimage",empimage);  

    console.log(empimage);
    console.log(formdata);
    return this.http.post("http://localhost:8080/Hr_mgmt/user/register?project_id="+user.project_id+"&department_id="+user.department_id,formdata);
    
  }
  getData()
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/user");
  }

  getSingleUserData(data)
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/user/getuser/"+data);
  }

  getUserByemail(data)
  {
    return this.http.get('http://localhost:8080/Hr_mgmt/user/singleUser?email_id='+data);
  }

  UpdateData(user)
  {
    console.log("service update"+user);
    console.log(user)
    return this.http.put("http://localhost:8080/Hr_mgmt/user/" + user.id,user );
  }

  }

