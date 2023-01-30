import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    usersPages: usersReducer,
    navBar: navBarReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store