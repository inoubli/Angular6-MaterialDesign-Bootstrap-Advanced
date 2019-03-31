import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/signin');
  }

}
