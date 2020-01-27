import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(public http:HttpClient) { }

  register(project)
  {
    return this.http.post("http://localhost:8080/Hr_mgmt/project/register",project);
  }
  getData()
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/project");
  }
  getSingleProjectData(id)
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/project/"+id);
  }
  Update(project)
  {
    console.log("service update"+project);
    console.log(project)
    return this.http.put("http://localhost:8080/Hr_mgmt/project/"+ project.id,project);
  }



}
