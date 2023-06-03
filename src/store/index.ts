import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

// add reducers here
import baseRequestReducer from './reducers/baseRequest/baseRequest.slice';
import loginReducer from './reducers/login/login.slice';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  baseRequest: baseRequestReducer,
  login: loginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
