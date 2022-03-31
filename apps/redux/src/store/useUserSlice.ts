import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from './store';
import { fetchUser, userSlice } from './userSlice';

export const useUserSlice = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const actions = bindActionCreators(
    { ...userSlice.actions, fetchUser },
    dispatch,
  );

  return { ...actions, ...user };
};
