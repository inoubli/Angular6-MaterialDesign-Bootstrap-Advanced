import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  profile: any;
  selectedFile : File = null;
  constructor(private userService : UserService, private http : HttpClient) { }
  
  serverErrorMessages: string;

  ngOnInit() {
    let user_id = this.userService.getUserPayload1().id; //{"id":62,"iat":1554661655,"exp":1554665255,"roles":["ROLE_ADMIN"],"username":"admin"}
    //console.log("current user_id:  "+user_id);
        
    this.userService.getUserById(user_id).subscribe(
     (res :any) => {
        this.profile = res;
        //console.log(this.profile);
        // this.router.navigateByUrl('/pages/dashboard');
        // this.toastr.success('Vous étes connecté!', 'Connexion');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        //console.log(this.serverErrorMessages);
      }
    );

  } // End ngOnInit()

  //FILE UPLOAD FUNCTIONS
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }
  //noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  fileUploadHeaders = { headers: new HttpHeaders({  'Authorization':'Bearer '+this.userService.getToken() }) }; 
  
  onUpload(event){
    const fd = new FormData();
    fd.append('file',this.selectedFile,this.selectedFile.name)
    this.http.post(environment.apiBaseUrl + '/media_objects',fd,this.fileUploadHeaders )
      .subscribe(res => {
        console.log(res);
      })

  }

}
