
import { legacy_createStore } from "redux";
import { reducer } from "./Redux/Reducer";
const initialState = {
    product: [],
    isLoading: false,
    isError: false
};


export const store=legacy_createStore(reducer,initialState)