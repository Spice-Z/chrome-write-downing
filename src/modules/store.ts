import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import memosApp from "./reducers";

const store = createStore(memosApp,applyMiddleware(thunk));

export default store;
