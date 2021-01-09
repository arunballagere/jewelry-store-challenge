import { Component, OnInit } from '@angular/core';
import { ILoginDetails } from '../login/login.component';
import{Router} from '@angular/router';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {

  public isPrevilaged:boolean=false;
  public user:ILoginDetails;
  public isLoggedIn:boolean;
   public goldprice:number;
   public weight:number;
  public totalPrice:number;
  public discount:number=0.02;
  UserTitle:string;

  constructor(private router:Router) {   
      
   }

  ngOnInit() {
    var strIsLoggedIn = localStorage.getItem("isLoggedIn");
    this.isLoggedIn=(strIsLoggedIn=="true");
    if(!this.isLoggedIn){
        this.router.navigate(['/login']);
    }

    var strUser=localStorage.getItem("user");
    this.user=JSON.parse(strUser);    
    this.isPrevilaged=this.user.user.isPrevilaged;  

    this.UserTitle="Welcome: "+ (this.isPrevilaged?"Privilaged":"Normal") +" User";

  }

  Calculate():void{

    if(this.goldprice==undefined || this.weight==undefined){
      return;
    }  

    if(this.isPrevilaged){       
      let discount:number=(this.weight*this.goldprice)*this.discount;
      this.totalPrice=(this.weight*this.goldprice) - discount;
    }else{  
      this.totalPrice=(this.weight*this.goldprice);
    }
  }

  PrintToScreen():void{
    alert("Print to screen");
  }

  PrintToFile():void{
    alert("Print to file");
  }

  PrintToPaper():void{
    alert("Print to paper");
  }

  Close(): void{
    localStorage.setItem("isLoggedIn", "false");
    this.router.navigate(['/login'])
  }


}
