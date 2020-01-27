import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(public http:HttpClient) { }

  applyleave(leave)
  {
    return this.http.post("http://localhost:8080/Hr_mgmt/leave/apply?u_id="+leave.u_id,leave);
  }
  getData()
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/leave");
  }
  getAllLeavesOfUser(data)
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/leave/"+data);
  }

  getAllActiveLeaves()
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/leave/active");
  }

 acceptLeave(leave)
  {
    console.log("service update"+leave);
    console.log(leave)
    return this.http.put("http://localhost:8080/Hr_mgmt/leave/approve",leave);
  }

  disapproveLeave(leave)
  {
    console.log("service update"+leave);
    console.log(leave)
    return this.http.put("http://localhost:8080/Hr_mgmt/leave/disapprove",leave);
  }
}
