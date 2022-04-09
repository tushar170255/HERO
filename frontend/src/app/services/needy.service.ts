import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class NeedyService {

  constructor(
    private http:HttpClient
  ) { }

  public addNeedy(  needy : any)
  {
    return this.http.post(`${baseUrl}/needy/`,needy);
  }
}
