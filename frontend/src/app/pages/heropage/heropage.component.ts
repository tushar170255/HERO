import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css']
})
export class HeropageComponent implements OnInit {
public  hero: any;
public needyToAccept : any;
  constructor() 
  {
    
    this.hero=LoginComponent.heroResponse;
    this.needyToAccept=this.hero.needyAccept;
  

   }

  ngOnInit(): void {


  }
accept(){

}
reject()
{
  
}

}
