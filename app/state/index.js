import { combineReducers } from 'redux';
import * as User from './User';
import * as Settings from './Settings';

const rootReducer = combineReducers({
  user: User.userReducer,
  settings: Settings.settingsReducer,
});
export { rootReducer, User, Settings };
