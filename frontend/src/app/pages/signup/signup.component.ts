import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public needy={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    sex:'',
    email:'',
    phone:'',
    pincode:'',
    birthday:'',
    age:'',
    disable:'',
    disability:'',


  }
formSubmit()
{
  console.log(this.needy);
  if(this.needy.userName == ''|| this.needy.userName == null)
  {
    window.alert('user is required');
    return;
  }

}
}
