import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('@reduxjs/toolkit', () => ({
  configureStore: jest.fn(() => Promise.resolve()),
  combineReducers: jest.fn(() => Promise.resolve()),
  createSlice: jest.fn(() => Promise.resolve()),
  getDefaultMiddleware: jest.fn(() => Promise.resolve()),
  createAction: jest.fn(),
}));

jest.mock('../app/config/store', () => ({}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => Promise.resolve()),
  useSelector: jest.fn((data) => data),
}));

jest.mock('react-native-device-info', () => ({
  getModel: jest.fn(),
}));

jest.mock('../app/state/User', () => {
  return {
    saveUser: jest.fn(),
  };
});

jest.mock('../app/state/Settings', () => {
  return {
    saveBannerStatus: jest.fn(),
  };
});
