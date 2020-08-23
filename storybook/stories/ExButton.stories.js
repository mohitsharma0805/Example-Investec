import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ExButton } from '../../app/components';

storiesOf('ExButton', module).add('Button Filled', () => (
  <ExButton text="Submit" onPress={action('Filled Button Pressed')} />
));
