import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Project } from './project.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  selectedProject: Project = {
    title: '',
    description: '',
    budget: '', 
    status: '',
    published: '',
    author: null,
    offers: null
    };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  
  getUserProjects(id: number) {
    return this.http.get(environment.apiBaseUrl + '/users/'+ id +'/projects');
  }


  
}
