import { Component, OnInit } from '@angular/core';
// import { throws } from 'assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login ={
    "usrName":'',
    "password":'',
    "type":''
  }
  constructor() { }

  ngOnInit(): void {
  }
  // formSubmit()
  // {
  //   if(this.login.type==)


  // }

}
