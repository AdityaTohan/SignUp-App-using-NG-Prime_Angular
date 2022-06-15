import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  signupApi(data: any): Observable<any> {
    return this.httpClient.post('https://www.google.com/', data)
  }

  login(data: any): Observable<any> {
    return this.httpClient.post('https://www.google.com/', data)
  }
}
