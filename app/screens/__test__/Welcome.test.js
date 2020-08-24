import React from 'react';
import { shallow } from 'enzyme';
import { SafeAreaView } from 'react-native';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { ExTextInput, ExButton, ExBanner } from '../../components';
import Welcome from '../Welcome';

describe('Welcome', () => {
  const dispatch = jest.fn();
  redux.useDispatch.mockReturnValue(dispatch);
  const navigation = {
    navigate: jest.fn(),
  };
  describe('Render UI with show banner', () => {
    const mockStore = configureStore();
    const store = mockStore({
      banner: true,
      user: {},
      deviceType: 'Device',
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().banner)
      .mockImplementationOnce(() => store.getState().user)
      .mockImplementationOnce(() => store.getState().deviceType);

    const wrapper = shallow(<Welcome navigation={navigation} />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(ExTextInput).length).toEqual(1);
      expect(wrapper.find(ExButton).length).toEqual(1);
      expect(wrapper.find(ExBanner).length).toEqual(1);
    });
    it('Simulate TextInput and Button', () => {
      const textInput = wrapper.find(ExTextInput).first();
      textInput.simulate('changeText', 'Mohit');

      const button = wrapper.find(ExButton);
      button.simulate('press');
      expect(button).toBeTruthy();
    });
  });
  describe('Render UI with banner hidden', () => {
    const mockStore = configureStore();
    const store = mockStore({
      banner: false,
      user: {},
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().banner)
      .mockImplementationOnce(() => store.getState().user);

    const wrapper = shallow(<Welcome navigation={navigation} />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(ExTextInput).length).toEqual(1);
      expect(wrapper.find(ExButton).length).toEqual(1);
      expect(wrapper.find(ExBanner).length).toEqual(0);
    });
    it('Simulate TextInput and Button', () => {
      const textInput = wrapper.find(ExTextInput).first();
      textInput.simulate('changeText', 'test');

      const button = wrapper.find(ExButton);
      button.simulate('press');
      expect(button).toBeTruthy();
    });
  });
});
