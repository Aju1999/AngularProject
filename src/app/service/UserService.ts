import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, loginRequest } from '../models/Person';
import baseUrl from './commonurl';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client : HttpClient, ) { }

  register(Person: Person):Observable<any> {
    return this.client.post(`${baseUrl}/person/register`,Person);
  }
  login(Login: loginRequest):Observable<any> {
    return this.client.post(`${baseUrl}/person/login`,Login);
  }
}
