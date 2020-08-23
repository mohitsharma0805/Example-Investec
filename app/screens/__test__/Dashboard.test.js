import React from 'react';
import { shallow } from 'enzyme';
import { SafeAreaView, View, Text } from 'react-native';
import * as redux from 'react-redux';
import Slider from 'react-native-slide-to-unlock';
import configureStore from 'redux-mock-store';
import Dashboard from '../Dashboard';
import { ExBanner, ExButton } from '../../components';

describe('Dashboard', () => {
  describe('Render UI with show banner', () => {
    const mockStore = configureStore();
    const navigation = {
      navigate: jest.fn(),
      setOptions: jest.fn(),
    };
    const store = mockStore({
      banner: true,
      user: { name: 'mohit' },
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().banner)
      .mockImplementationOnce(() => store.getState().user);

    const wrapper = shallow(<Dashboard navigation={navigation} />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(View).length).toEqual(1);
      expect(wrapper.find(ExButton).length).toEqual(3);
      expect(wrapper.find(Slider).length).toEqual(1);
      expect(wrapper.find(Text).length).toEqual(1);
      expect(wrapper.find(ExBanner).length).toEqual(1);
    });
  });
  describe('Render UI with banner hidden', () => {
    const mockStore = configureStore();
    const navigation = {
      navigate: jest.fn(),
      setOptions: jest.fn(),
    };
    const store = mockStore({
      banner: false,
      user: { name: 'mohit' },
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().banner)
      .mockImplementationOnce(() => store.getState().user);

    const wrapper = shallow(<Dashboard navigation={navigation} />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(View).length).toEqual(1);
      expect(wrapper.find(ExButton).length).toEqual(3);
      expect(wrapper.find(Slider).length).toEqual(1);
      expect(wrapper.find(Text).length).toEqual(1);
    });
  });
});
