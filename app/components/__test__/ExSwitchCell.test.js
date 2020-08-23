import React from 'react';
import { shallow } from 'enzyme';
import { View, Text, Switch } from 'react-native';
import ExSwitchCell from '../ExSwitchCell';

describe('ExSwitchCell', () => {
  describe('Rendering', () => {
    const wrapper = shallow(<ExSwitchCell />);
    it('renders the container view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(3);
      expect(wrapper.find(Text).length).toEqual(1);
      expect(wrapper.find(Switch).length).toEqual(1);
    });
  });
});