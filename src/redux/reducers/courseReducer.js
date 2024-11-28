import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
  courses: [], // Add courses to initial state here
  lectures: [], // Add courses to initial state
};

export const courseReducer = createReducer(initialState, builder => {
  builder
    .addCase('allCoursesRequest', state => {
      state.loading = true;
    })
    .addCase('allCoursesSuccess', (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    })
    .addCase('allCoursesFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase('getCoursesRequest', state => {
      state.loading = true;
    })
    .addCase('getCoursesSuccess', (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    })
    .addCase('getCoursesFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase('addToPlaylistRequest', state => {
      state.loading = true;
    })
    .addCase('addToPlaylistSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('addToPlaylistFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearError', state => {
      state.error = null;
    })
    .addCase('clearMessage', state => {
      state.message = null;
    });
});
