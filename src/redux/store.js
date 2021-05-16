import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import appReducer from "./app.reducer";
import createSagaMiddleware from "redux-saga";
import { incrementSaga } from "./app.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(appReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(incrementSaga);
