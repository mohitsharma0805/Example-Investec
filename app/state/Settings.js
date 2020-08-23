import { createSlice } from '@reduxjs/toolkit';

const saveBannerData = (state, action) => {
  state.banner = action.payload;
};

// REDUCER
const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    banner: true,
  },
  reducers: {
    saveBannerStatus: saveBannerData,
  },
});

// ACTIONS
const { saveBannerStatus } = settingsSlice.actions;

// SELECTOR
const selectBannerStatus = ({ settings }) => settings.banner;

const settingsReducer = settingsSlice.reducer;

export { settingsReducer, saveBannerStatus, selectBannerStatus };
