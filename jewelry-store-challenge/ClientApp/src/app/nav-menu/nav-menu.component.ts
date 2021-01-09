import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import { ILoginDetails, IUser } from '../login/login.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  user:ILoginDetails;
  UserTitle:string="";

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(){
    var strUser=localStorage.getItem("user");
    this.user=JSON.parse(strUser);    
    let isPrevilaged:boolean=this.user.user.isPrevilaged;  
    this.UserTitle="Welcome: "+ (isPrevilaged?"Privilaged":"Normal") +" User";

  }

}
