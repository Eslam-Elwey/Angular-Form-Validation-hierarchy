import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



interface UserInfo
{
  name : string ,
  age  : number
}

@Component({
  selector: 'app-login-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})



export class LoginComponentComponent {

  userName :string = "";
  userAge :string = "";

  @Output() receiveDataEvent = new EventEmitter() ;

  get nameStatus()
  {
    return this.userName.length>=3 ;
  }

  get ageStatus()
  {
    return (+this.userAge<30&&+this.userAge>5) ;
  }

  addUser()
  {
    if(this.nameStatus&&this.ageStatus)
    {
      let userData :UserInfo ={
        name : this.userName.trim() ,
        age : +this.userAge
      } ;

      console.log(userData) ;
      this.userName="" ;
      this.userAge="" ;
      this.receiveDataEvent.emit(userData) ;
    }
    else
    {
      console.log("not valid Inputs")
    }

  }





}
