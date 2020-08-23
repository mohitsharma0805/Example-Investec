import { createSlice } from '@reduxjs/toolkit';

const saveBannerData = (state, action) => {
  state.banner = action.payload;
};

const saveDevice = (state, action) => {
  state.deviceType = action.payload;
};

// REDUCER
const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    banner: true,
    deviceType: null,
  },
  reducers: {
    saveBannerStatus: saveBannerData,
    saveDeviceType: saveDevice,
  },
});

// ACTIONS
const { saveBannerStatus, saveDeviceType } = settingsSlice.actions;

// SELECTOR
const selectBannerStatus = ({ settings }) => settings.banner;
const selectDeviceType = ({ settings }) => settings.deviceType;

const settingsReducer = settingsSlice.reducer;

export { settingsReducer, saveBannerStatus, selectBannerStatus, saveDeviceType, selectDeviceType };
