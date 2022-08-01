import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Product } from '../common/product';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class ManagmentServiceService {

  prourl = "http://localhost:8080/api/pro"; 
  caturl = "http://localhost:8080/api/category";

  constructor(private httpClient : HttpClient) { }
  getAllProducts(): Observable<Product[]>{
    console.log(this.httpClient.get<getProductResponse>(this.prourl).pipe(map(Response => Response._embedded.products)));
    return this.httpClient.get<getProductResponse>(this.prourl).pipe(map(Response => Response._embedded.products));
  }

  getAllCategories(): Observable<Category[]>{
    console.log(this.httpClient.get<getCategoryResponse>(this.caturl).pipe(map(Response => Response._embedded.categories)));
    return this.httpClient.get<getCategoryResponse>(this.caturl).pipe(map(Response => Response._embedded.categories));
  }

  saveProduct(product: Product): Observable<Product>{
    console.log(product)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorozation' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Product>(this.prourl,product,httpOptions);
  }


}

interface getProductResponse{
  _embedded:{
    products : Product[];
  }
}

interface getCategoryResponse{
  _embedded:{
    categories : Category[];
  }
}
