import { Component } from '@angular/core';
import { DisplayComponentComponent } from './../Components/display-component/display-component.component';
import { LoginComponentComponent } from './../Components/login-component/login-component.component';
// import { RouterOutlet } from '@angular/router';

interface user
  {
    name : string ,
    age : number
  }


@Component({

  selector: 'app-root',
  imports: [DisplayComponentComponent ,LoginComponentComponent ],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo3';
  allUsers : user[]=[] ;
  dataFun(userData:any)
  {
    this.allUsers.push(userData) ;
    console.log(this.allUsers);
  }



}
