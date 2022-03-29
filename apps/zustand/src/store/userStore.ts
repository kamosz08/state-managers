import create from 'zustand';

export type Feature = 'feature1' | 'feature2';
type UserFeatures = Record<Feature, boolean>;

type UserState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  userName: string;
  features: UserFeatures;
  getUser: () => void;
  updateFeature: (feature: Feature, value: boolean) => void;
  setUserName: (newUserName: string) => void;
};

export const useUserStore = create<UserState>(set => ({
  status: 'idle',
  userName: '',
  features: { feature1: false, feature2: false },
  getUser: async () => {
    try {
      const data = await fetch('user.json').then(response => response.json());
      set(state => ({ ...state, status: 'success', ...data }));
    } catch (error) {
      set(state => ({ ...state, status: 'error' }));
    }
  },
  updateFeature: (feature, value) =>
    set(state => {
      const newFeatures = { ...state.features, [feature]: value };
      return { ...state, features: newFeatures };
    }),
  setUserName: (newUserName: string) =>
    set(state => ({ ...state, userName: newUserName })),
}));
