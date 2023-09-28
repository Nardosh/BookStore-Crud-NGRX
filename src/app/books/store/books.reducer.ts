import { createReducer, on } from '@ngrx/store';

import { Book, Fruits } from "./book";
import { booksFetchAPISuccess, saveBooksAPISuccess } from "./books.action";
import { state } from '@angular/animations';



export const initialState: ReadonlyArray<Book> = [ ];

export const bookReducer = createReducer(
    initialState,
    on(booksFetchAPISuccess, (_state, { allBooks }) => {
        return allBooks;
      }),

      on(saveBooksAPISuccess, (state, { response }) => {
        let newState = [...state];
        newState.unshift(response);
        return newState;
      })
);



export const initialState1: ReadonlyArray<Fruits> = [ 
  {
    "id": 1,
    "name": "Mango",
    "price": 150
  }
];

// dummy....
// export const bookReducer1 = createReducer(
//   initialState1,
//      on(fruitsFetchAPISuccess, (state, {allFruits}) => {
//       return allFruits;
//     }),
//     );
    // ...... 