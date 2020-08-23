import colors from './colors';
import local from './local';
import strings from './strings';
import routes from './routes';
import { store } from './store';

const config = {
  colors,
  ...local,
  store,
  strings,
  routes,
};

export default config;
