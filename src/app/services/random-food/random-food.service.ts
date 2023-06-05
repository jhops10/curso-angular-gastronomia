import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RandomFoodService {

  constructor(private http: HttpClient) { }

  listRandomFood(take: number){
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=29f3238740bc4e99a9602e0e77fec6bf&number=${take}`

    return this.http.get(apiUrl)
  }
}

