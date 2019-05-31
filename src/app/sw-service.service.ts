import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwServiceService {

  constructor(private http: HttpClient) { }

  private url = 'https://swapi.co/api/'

  getStarWars(): Observable<any> {
    console.log(this.url)
    return this.http.get(this.url)
  }
}
