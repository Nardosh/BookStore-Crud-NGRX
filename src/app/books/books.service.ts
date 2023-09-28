import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from './store/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/books";
  urlF = "http://localhost:3000/Fruits";
  get(){
    return this.http.get<Book[]>(this.url)
  }
  getF(){
    return this.http.get<Book[]>(this.urlF)
  }



  create(payload:Book){
    return this.http.post<Book>(this.url, payload);
  }

}
