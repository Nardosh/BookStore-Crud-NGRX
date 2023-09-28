import { createFeatureSelector } from "@ngrx/store";
import { Book, Fruits } from "./book";


export const selectBooks = createFeatureSelector<Book[]>("mybooks") 

// ...dummy 
// export const selectFruits = createFeatureSelector<Fruits[]>("myfruits") 

// ....