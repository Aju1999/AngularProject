import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, loginRequest } from '../models/Person';
import baseUrl from './commonurl';
import { PageData } from '../models/PageData';

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
  getAllUserRoles():Observable<any> {
    return this.client.get(`${baseUrl}/person/roles`);
  }
  getUsersByPegination(name:string = "",page:number=0,records:number=5):Observable<PageData> {
    return this.client
      .get<PageData>(`${baseUrl}/person/pagable?name=${name}&page=${page}&records=${records}`);
  }
}
