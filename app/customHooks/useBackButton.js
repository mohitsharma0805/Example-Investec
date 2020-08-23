import { useEffect } from 'react';
import { BackHandler } from 'react-native';

/**
 * UseBackButton Hook for android Hardware back button
 * @param {*} handler : function
 */
function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}

export default useBackButton;
