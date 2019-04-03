import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public userService:UserService,private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
  logout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/signin');
    this.toastr.info('Déconnexion réussi', 'Déconnexion', { positionClass:'toast-top-center' });
  }

}
