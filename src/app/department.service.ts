import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(public http:HttpClient) { }
  register(department)
  {
    return this.http.post("http://localhost:8080/Hr_mgmt/department/register",department);
  }
  getData()
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/department");
  }
  getSingleDepartmentData(id)
  {
    return this.http.get("http://localhost:8080/Hr_mgmt/department/"+id);
  }
  UpdateData(department)
  {
    console.log("service update"+department);
    console.log(department)
    return this.http.put("http://localhost:8080/Hr_mgmt/department/" + department.id,department);
  }
}
