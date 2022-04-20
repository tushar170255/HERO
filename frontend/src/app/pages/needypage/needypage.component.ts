import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { HeroService } from 'src/app/services/hero.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-needypage',
  templateUrl: './needypage.component.html',
  styleUrls: ['./needypage.component.css']
})

export class NeedypageComponent implements OnInit {

  private needy : any;
  constructor(private heroService : HeroService,private router :Router) { }
public base: any;
public finding:any;
  ngOnInit(): void {
    this.needy=LoginComponent.needyResponse;
   this.base=true;
   this.finding=false;
   console.log(this.base);
  }
findHero()
{
  this.heroService.findHero(this.needy).subscribe(
    (data : any)=>{
      console.log(data);
      this.base=false;
      this.finding=true;
    //  Swal.fire("sucess","user is registered","success",5000);
   
  
    
  }
    ,(error)=>{
      console.log(error);
      alert('error occured!!!');
    }
  
  
  );



}
}
