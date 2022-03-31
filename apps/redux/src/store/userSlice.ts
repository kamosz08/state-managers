import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Feature = 'feature1' | 'feature2';
type UserFeatures = Record<Feature, boolean>;

type UserState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  userName: string;
  features: UserFeatures;
};

const initialState: UserState = {
  status: 'idle',
  userName: '',
  features: { feature1: false, feature2: false },
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const data = await fetch('user.json').then(response => response.json());
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFeature: (
      state,
      action: PayloadAction<{ feature: Feature; value: boolean }>,
    ) => {
      state.features[action.payload.feature] = action.payload.value;
    },
    setUserName: (state, action: PayloadAction<{ newUserName: string }>) => {
      state.userName = action.payload.newUserName;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'success';
      state.userName = action.payload.userName;
      state.features = action.payload.features;
    });
  },
});
