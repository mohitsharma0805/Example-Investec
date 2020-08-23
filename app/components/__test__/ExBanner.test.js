import React from 'react';
import { shallow } from 'enzyme';
import { View, Text } from 'react-native';
import ExBanner from '../ExBanner';

describe('ExBanner', () => {
  describe('Rendering', () => {
    const wrapper = shallow(<ExBanner />);
    it('renders the container view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(1);
      expect(wrapper.find(Text).length).toEqual(1);
    });
  });
});
