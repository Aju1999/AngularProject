import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private client : HttpClient) { }

  fact():Observable<any> {
    return this.client.get("https://catfact.ninja/fact");
  }
}
