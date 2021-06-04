import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  photo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setSignIn: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setSignIn, setSignOut } = userSlice.actions;

export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectPhoto = (state) => state.user.photo;

export default userSlice.reducer;
