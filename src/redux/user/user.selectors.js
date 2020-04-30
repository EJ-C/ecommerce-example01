import { createSelector } from 'reselect';


const selectUser = state => state.user;


export const selectCurrentUser = createSelector(
  [selectUser],
  // can be used one or more (ex. selectCart], )
  (user) => user.currentUser
  // or  ,cart) => user.currentUser
)