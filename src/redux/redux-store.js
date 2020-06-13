import {combineReducers, createStore, compose} from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer"
import { applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    app : appReducer,
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form : formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//window.store = store;

export default store;