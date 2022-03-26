import create from 'zustand';

type Feature = 'feature1' | 'feature2';

type UserState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  userName: string;
  features: Feature[];
  getUser: () => void;
  setFeatures: (newFeatures: Feature[]) => void;
  setUserName: (newUserName: string) => void;
};

export const useUserStore = create<UserState>(set => ({
  status: 'idle',
  userName: '',
  features: [],
  getUser: async () => {
    try {
      const data = await fetch('user.json').then(response => response.json());
      set(state => ({ ...state, status: 'success', ...data }));
    } catch (error) {
      set(state => ({ ...state, status: 'error' }));
    }
  },
  setFeatures: (newFeatures: Feature[]) =>
    set(state => ({ ...state, features: newFeatures })),
  setUserName: (newUserName: string) =>
    set(state => ({ ...state, userName: newUserName })),
}));
