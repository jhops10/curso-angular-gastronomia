import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {


  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=29f3238740bc4e99a9602e0e77fec6bf8&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }
}
