import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectService } from '../../shared/project.service';
import { UserService } from '../../shared/user.service';

import { ToastrService } from 'ngx-toastr';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-home-seeker',
  templateUrl: './home-seeker.component.html',
  styleUrls: ['./home-seeker.component.scss']
})
export class HomeSeekerComponent implements OnInit {
 
  projects: Project[];
  cols: any[];
  selectedProj: Project;

  constructor(private router : Router,private projectService : ProjectService,private userService : UserService, private toastr: ToastrService) { }
  
  serverErrorMessages: string;

  ngOnInit() {
    let user_id = this.userService.getUserPayload1().id; //{"id":62,"iat":1554661655,"exp":1554665255,"roles":["ROLE_ADMIN"],"username":"admin"}
    //console.log("current user_id:  "+user_id);
        
    this.projectService.getUserProjects(user_id).subscribe(
     (res :any) => {
        this.projects = res["hydra:member"];
      //  console.log(this.projects.length);
        // this.router.navigateByUrl('/pages/dashboard');
        // this.toastr.success('Vous étes connecté!', 'Connexion');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        //console.log(this.serverErrorMessages);
      }
    );

    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'budget', header: 'Budget' },
      { field: 'status', header: 'Status' },
      { field: 'published', header: 'Published' }
  ];



  } // End ngOnInit()

  // onRowSelect(project: any) {
  //   this.selectedProj = project.data;
  //   console.log("Selected param :"+project.data.id);
  //   // this.router.navigateByUrl('pages/projectOffers/',project.data.id);
  //   this.router.navigate([ 'pages/projectOffers/', { queryParams: { id: project.data.id } }  ]);
  // }

    


}
