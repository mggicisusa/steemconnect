import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './app/appReducers';
import appsReducers from './apps/reducers';
import authReducers from './auth/authReducers';
import devReducers from './developers/reducers';
import passwordDialogReducers from './passwordDialog/reducers';
import paymentsReducers from './transfer/reducers';

const reducers = combineReducers({
  app: appReducers,
  apps: appsReducers,
  auth: authReducers,
  developer: devReducers,
  passwordDialog: passwordDialogReducers,
  payments: paymentsReducers,
});

export default createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk)
);
