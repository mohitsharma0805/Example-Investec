import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ExSwitchCell } from '../../app/components';

storiesOf('ExSwitchCell', module).add('Switch enabled', () => (
  <ExSwitchCell switchValue onSwitchValueChange={action('switch value changed')} />
));
