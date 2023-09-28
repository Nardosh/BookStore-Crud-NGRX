import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBooks } from '../store/books.selector';
import { invokeBooksAPI,  } from '../store/books.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private store:Store){ }

  books$ = this.store.pipe(select(selectBooks))
  // fruits$ = this.store.pipe(select(selectFruits))


  ngOnInit(): void {
   this.store.dispatch(invokeBooksAPI())
  //  this.store.dispatch(invokeFruitsAPI())
  }



}
