import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http : HttpClient ) { }

  public addHero(  hero : any)
  {
    return this.http.post(`${baseUrl}/hero/`,hero);
  }
}
