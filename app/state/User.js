import { createSlice } from '@reduxjs/toolkit';

const saveUserData = (state, action) => {
  state.user = { name: action.payload.name };
};

// REDUCER
const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    saveUser: saveUserData,
  },
});

// ACTIONS
const { saveUser } = UserSlice.actions;

// SELECTOR
const selectUser = ({ user }) => user.user;

const userReducer = UserSlice.reducer;

export { userReducer, saveUser, selectUser };
