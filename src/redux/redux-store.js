import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navBar-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    usersPages: usersReducer,
    navBar: navBarReducer,
})

let store = createStore(reducers)
window.store = store
export default store