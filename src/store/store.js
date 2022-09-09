// import {applyMiddleware, compose} from "redux"
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/reducer";
// import thunk from "redux-thunk"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// nueva funcionalidad reemplazando el createStore, el configureStore crea el store, y automaticamente ya tiene el thunk
//para peticiones asincronas y para que funcionen las redux dev tools, reemplazando todo el codigo comentado arriba.
const store = configureStore({
  reducer: rootReducer,
  // composeEnhancers(applyMiddleware(thunk))
});

export default store;
