import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
};

export const adminReducer = createReducer(initialState, builder => {
  builder

  .addCase('getAdminStatsRequest', state => {
    state.loading = true;
  })
  .addCase('getAdminStatsSuccess', (state, action) => {
    state.loading = false;
    state.stats = action.payload.stats;
    state.viewsCount = action.payload.viewsCount;
    state.subscriptionCount = action.payload.subscriptionCount;
    state.subscriptionPercentage = action.payload.subscriptionPercentage;
    state.usersCount = action.payload.usersCount;
    state.viewsPercentage = action.payload.viewsPercentage;
    state.usersPercentage = action.payload.usersPercentage;
    state.subscriptionProfit = action.payload.subscriptionProfit;
    state.viewsProfit = action.payload.viewsProfit;
    state.usersProfit = action.payload.susersProfit;
  })
  .addCase('getAdminStatsFail', (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })

    .addCase('getAdminAllUsersRequest', state => {
      state.loading = true;
    })
    .addCase('getAdminAllUsersSuccess', (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase('getAdminAllUsersFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase('createCourseRequest', state => {
      state.loading = true;
    })
    .addCase('createCourseSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('createCourseFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase('deleteCourseRequest', state => {
      state.loading = true;
    })
    .addCase('deleteCourseSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteCourseFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase('addLectureRequest', state => {
      state.loading = true;
    })
    .addCase('addLectureSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('addLectureFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase('deleteLectureRequest', state => {
      state.loading = true;
    })
    .addCase('deleteLectureSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteLectureFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase('updateUserRoleRequest', state => {
      state.loading = true;
    })
    .addCase('updateUserRoleSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateUserRoleFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase('deleteUsersRequest', state => {
      state.loading = true;
    })
    .addCase('deleteUsersSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteUsersFail', (state, action) => {
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
