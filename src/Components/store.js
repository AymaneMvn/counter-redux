import { createStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";


const store = createStore(counterReducer);

export default store;