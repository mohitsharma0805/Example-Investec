import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity, Text } from 'react-native';
import ExButton from '../ExButton';

describe('ExButton', () => {
  describe('Rendering', () => {
    const wrapper = shallow(<ExButton />);
    it('renders the container view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(TouchableOpacity).length).toEqual(1);
      expect(wrapper.find(Text).length).toEqual(1);
    });
  });
  describe('Interaction', () => {
    it('Press event works', () => {
      const onPressEvent = jest.fn();
      const wrapper = shallow(<ExButton onPress={onPressEvent} />);
      wrapper.find(TouchableOpacity).first().props().onPress();
      expect(onPressEvent.mock.calls.length).toBe(1);
    });
  });
});
