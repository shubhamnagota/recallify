import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import wordsReducer from "../reducers/words";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

const middleware = [thunk];

export default () => {
  const store = createStore(
    combineReducers({
      words: wordsReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
