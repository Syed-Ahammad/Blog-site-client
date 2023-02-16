import { composeWithDevTools } from "@redux-devtools/extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import postReducer from "./reducers/postsReducer";

const store = createStore(postReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;