import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private client : HttpClient) { }


  findDog() {
    return this.client.get("https://dog.ceo/api/breeds/image/random");
  }

  fact():Observable<any> {
    return this.client.get("https://catfact.ninja/fact");
  }
  findGender(name: string){
    return this.client.get(`https://api.genderize.io?name=${name}`);
  }
  register(Person: Person):Observable<any> {
    return this.client.post("http://localhost:9595/person/register",Person);
  }
}
