import {createContext} from "react";

export const TodoContext = createContext()
export const initState = [
    {id: 1, text: "This is the first todo I need to do", done: false},
    {id: 2, text: "This is the second todo I need to do", done: false},
    {id: 3, text: "I already done this item", done: true}];