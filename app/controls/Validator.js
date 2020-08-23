import { Alert } from 'react-native';

export const validateUserDetails = (name) => {
  if (name.trim() === '') {
    Alert.alert('', 'Please Enter valid name');
    return false;
  }
  return true;
};
