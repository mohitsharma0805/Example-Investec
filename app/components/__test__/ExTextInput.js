import React from 'react';
import { shallow } from 'enzyme';
import { View, TextInput } from 'react-native';
import ExTextInput from '../ExTextInput';

describe('ExTextInput', () => {
  describe('Rendering', () => {
    const wrapper = shallow(<ExTextInput />);
    it('renders the container view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(TextInput).length).toEqual(1);
      expect(wrapper.find(View).length).toEqual(1);
    });
  });
});
