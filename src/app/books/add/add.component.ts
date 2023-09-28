import { Component } from '@angular/core';
import { Book } from '../store/book';
import { Store, select } from '@ngrx/store';
import { invokeSaveBooksAPI } from '../store/books.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Router } from '@angular/router';
import { setAPIStatus } from 'src/app/shared/store/app.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(
    private store:Store,
    private appStore: Store<Appstate>,
    private router:Router
    ){ }

bookForm:Book = {
id:0,
title: '',
author: '',
cost:0
}

save(){
  this.store.dispatch(invokeSaveBooksAPI({payload:{...this.bookForm}}))
  // let appStatus$ = this.appStore.pipe(select(selectAppState))
  // appStatus$.subscribe((data)=>{
  //   if(data.apiStatus === 'success'){
  //     this.appStore.dispatch(setAPIStatus({apiStatus:{apiStatus: '', apiResponseMessage: ''}}))
  //     this.router.navigate(['/']);
  //   }

  // })
}

}
