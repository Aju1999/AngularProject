import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './commonurl';
import { testUser } from '../models/TestModel';

@Injectable({
  providedIn: 'root'
})
export class TestingUserServiceService {

  constructor(private client : HttpClient, ) { }
  
  getAllUserRoles():Observable<any> {
    return this.client.get(`${baseUrl}/test/getall`);
  }

  getUserbyId(id: any):Observable<any> {
    return this.client.get(`${baseUrl}/test/${id}`);
  }
  updateUserbyId(testUser: testUser):Observable<any> {
    return this.client.post(`${baseUrl}/test/update`,testUser);
  }
}
