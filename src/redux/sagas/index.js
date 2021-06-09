import { spawn } from 'redux-saga/effects';

//Sagas
import todoSaga from './todo-saga';

//Export the root saga
export default function* rootSaga() {
  console.log('Hello from Redux-Saga!');
  yield spawn(todoSaga);
}
