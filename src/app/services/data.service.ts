import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public httpClient: HttpClient
  ) {


  }
  getData() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  async getDataUsingFetch() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonReponse = response.json();
    return jsonReponse;
  }
}


interface Item {
  userId: number
}
