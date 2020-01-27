import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListofempComponent } from './listofemp/listofemp.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';
import { DepartmentComponent } from './departmentlist/departmentlist.component';
import { DepartmentService } from './department.service';
import { DepartmentupdateComponent } from './departmentupdate/departmentupdate.component';


import { ProjectService } from './project.service';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';
import { RegisterprojectComponent } from './registerproject/registerproject.component';
import { ContactComponent } from './contact/contact.component';
import { ManageleavesComponent } from './manageleaves/manageleaves.component';
import { MyleavesComponent } from './myleaves/myleaves.component';
import { LeavesService } from './leaves.service';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmpaboutusComponent } from './empaboutus/empaboutus.component';
import { SetpassComponent } from './setpass/setpass.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterdepartmentComponent } from './registerdepartment/registerdepartment.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    ListofempComponent,
    ApplyleaveComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,

    EmpdashboardComponent,
    EmpupdateComponent,
    ApplyleaveComponent,
    DepartmentComponent,
    DepartmentupdateComponent,

    AboutusComponent,
    ProjectlistComponent,
    ProjectupdateComponent,
    RegisterprojectComponent,
    ManageleavesComponent,
    MyleavesComponent,
    LeavehistoryComponent,
    EmpaboutusComponent,
    SetpassComponent,
    ForgotpasswordComponent,
    RegisterdepartmentComponent

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    
    RouterModule.forRoot([
      {path:"aboutus",component:AboutusComponent},

      {path:"login",component:LoginComponent},

      {path:"contact",component:ContactComponent},

      {path:"list",component:ListofempComponent},
      {path:"register",component:RegisterComponent},
      {path:"empupdate/:id",component:EmpupdateComponent},

      {path:"departmentlist",component:DepartmentComponent},
      {path:"departmentupdate/:id",component:DepartmentupdateComponent},
      {path:"departmentregister",component:RegisterdepartmentComponent},
      {path:"empdash",component:EmpdashboardComponent},

      {path:"projectlist",component:ProjectlistComponent},
      {path:"projectupdate/:id",component:ProjectupdateComponent},
      {path:"projectregister",component:RegisterprojectComponent},
      
      {path:"applyleave",component:ApplyleaveComponent},
      {path:"myleave",component:MyleavesComponent},
      {path:"manageleave",component:ManageleavesComponent},
      {path:"leavehistory",component:LeavehistoryComponent},
      {path:"empaboutus",component:EmpaboutusComponent},
      {path:"setpass",component:SetpassComponent},
      {path:"forgot",component:ForgotpasswordComponent},
{path:"",component:LoginComponent}

    ])
  ],
  providers: [DataService,DepartmentService,ProjectService,LeavesService],
  bootstrap: [AppComponent]
})
export class AppModule { }


