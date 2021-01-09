import { Component, OnInit, Inject } from '@angular/core';
import {HttpClient, HttpParams, JsonpClientBackend,} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public user:ILoginDetails;
public _baseUrl:string;
public _http:HttpClient;

public username:string="";
public password:string="";
UserDetails:ILogin;


  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl:string, private router:Router ) { 
    this._http=http;
    this._baseUrl=baseUrl;
  }

  ngOnInit() {  
      
  }

  login():void{

    this.UserDetails={
      username:this.username,
      password:this.password
      };

      this._http.post<ILoginDetails>(this._baseUrl+"login",this.UserDetails).subscribe(
        result=>{
          if(result.isLoggedIn){
          this.user=result;
          console.log(this.user);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", JSON.stringify(this.user));

          this.router.navigate(['/estimation']);
          
          }
        },error=>console.error(error)       

      );
  }

}

export interface ILoginDetails{
  user:IUser,
  isLoggedIn:boolean
}

export interface ILogin{
  username:string,
  password:string
}

export interface IUser{
  firtName:string,
  isPrevilaged:boolean,
  lastName:string
  
}
