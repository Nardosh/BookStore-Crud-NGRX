import { createAction, props } from "@ngrx/store";
import { Book, Fruits } from "./book";


export const invokeBooksAPI = createAction(
    // "[source ] type of the event"
    "[Books API] invoke books Fetch API"
)

export const booksFetchAPISuccess = createAction(
    "[Books API] books fetch api success",
    props<{allBooks:Book[]}>()
    
    )


    // ..... dummy 
    // export const invokeFruitsAPI = createAction(
    //     "[Fruits API] invoke fruit Fetch API"
    // )
    // ........

// ..... dummy 
// export const fruitsFetchAPISuccess = createAction(
//     "[Fruits API] fruits fetch api success",
//     props<{allFruits:Fruits[]}>()

// )
// ........


export const invokeSaveBooksAPI = createAction(
    "[Books API] invoke save book API",
    props<{payload:Book}>()
)
export const saveBooksAPISuccess = createAction(
    "[Books API] save book api success",
    props<{response: Book}>()
)