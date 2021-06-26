import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { root } from "./rootReducer";

export const AppStore = createStore(root, compose(applyMiddleware(thunk)));
