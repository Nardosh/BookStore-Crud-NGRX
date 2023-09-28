import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksService } from "../books.service";
import { booksFetchAPISuccess,  invokeBooksAPI,  invokeSaveBooksAPI, saveBooksAPISuccess } from "./books.action";
import { map, switchMap, withLatestFrom } from "rxjs";
import { setAPIStatus } from "src/app/shared/store/app.action";
import { select } from "@ngrx/store";
import { selectBooks } from "./books.selector";

@Injectable()
export class BooksEffects {
    appStore: any;
    constructor(private action$:Actions,
        private bookService:BooksService){ }

        loadAllBooks$ = createEffect(()=>
        this.action$.pipe(
            ofType(invokeBooksAPI),
            switchMap(() => {
                return this.bookService.get()
                .pipe(
                    map((data)=> booksFetchAPISuccess({allBooks: data}))
                )
            })
            ) 
        );

        //.......dummy
        // loadAllFruits$ = createEffect(()=>
        // this.action$.pipe(
        //     ofType(invokeFruitsAPI),
        //     switchMap(() => {
        //         return this.bookService.getF()
        //         .pipe(
        //             map((data:any)=> fruitsFetchAPISuccess({allFruits: data}))
        //         )
        //     })
        //     ) 
        // );

        // .............................................................................................


        saveNewBooks = createEffect(()=>
        this.action$.pipe(
            ofType(invokeSaveBooksAPI),
            switchMap((action)=>{
                // this.appStore.dispatch(setAPIStatus({apiStatus:{apiResponseMessage:'', apiStatus:''}}))
                return this.bookService
                .create(action.payload)
                .pipe(map((data)=> {
                // this.appStore.dispatch(setAPIStatus({apiStatus:{apiResponseMessage:'', apiStatus:'success'}}))
                   return saveBooksAPISuccess({response: data})
                } ))

            })
        )
        
        
        )
}


