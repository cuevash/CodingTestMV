// REDUX
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from 'rdx/root';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware
      )
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore