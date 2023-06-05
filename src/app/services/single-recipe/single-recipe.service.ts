import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=29f3238740bc4e99a9602e0e77fec6bf`;

    return this.http.get(apiUrl)
  }

  takeSimilarRecipe(id: number) {
        const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=29f3238740bc4e99a9602e0e77fec6bf`;

        return this.http.get(apiUrl);
  }
}
