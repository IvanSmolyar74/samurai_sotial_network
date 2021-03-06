import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import initializedAppReducer from "./authApp-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: initializedAppReducer
});

type RootRedusersType = typeof rootReducers
export type AppStateType = ReturnType<RootRedusersType>

let store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)));
export default store;